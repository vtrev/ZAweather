//calculateBill Instance
let weatherWidget = new Vue({
    el: '.main-widget',
    data: {
        longitude: 0,
        latitude: 0,
        main: "Loading...",
        town: 'Loading...',
        mintemp: 'Loading...',
        maxtemp: 'Loading...',
        temp: "Loading...",
        description: "Loading",
        currentCode: 0,
        selected: '',
        mainId: 0,
        townText: 'Town',
        keywordId: 0,
        mintemptext: "Min Temp",
        maxtemptext: "Max Temp",
        fivedaytext: "Next five days :",
        showSetup: true,
        showWeather: false
    },
    computed: {

    },

    methods: {
        show: function () {
            this.getForecast();
            this.showSetup = false;
            this.showWeather = true;
        },
        showSet: function () {
            this.showSetup = true;
            this.showWeather = false;
        },
        getKeywordsFromApi: function (languages) {

        },
        getMainFromApi: function (main) {
            if (main.includes('Clear')) {
                return 1
            }
            if (main.includes('Sunny' || 'Sun')) {
                return 3
            }
            if (main.includes('Rain' || 'Rainny')) {
                return 4
            }
            if (main.includes('Cloud' || 'Cloudy')) {
                return 2
            }
            if (main.includes('Wind' || 'Windy')) {
                return 5
            }
        },
        applyLanguage: function (phrase) {
            this.description = Object.values(phrase)[0];
        },
        callLanguageApi: async function () {
            try {
                const response = await axios.get('/api/language', {
                    params: {
                        code: this.currentCode,
                        language: this.selected
                    }
                });
                let phrase = response.data.data;
                this.applyLanguage(phrase)
            } catch (error) {
                console.error(error);
            }
        },
        callMain: async function () {
            try {
                const response = await axios.get('/api/main', {
                    params: {
                        id: this.mainId,
                        language: this.selected
                    }
                });
                if (this.selected !== "English") {
                    this.main = Object.values(response.data.data)[0];
                }

                // this.applyLanguage(phrase)
            } catch (error) {
                console.error(error);
            }
        },
        callKeywords: async function () {
            try {
                const result = await axios.get('/api/keyword', {
                    params: {
                        language: this.selected.toLowerCase()
                    }
                });
                if (this.selected !== "English") {
                    this.townText = result.data.data.town;
                    let capital = this.townText.charAt(0).toUpperCase();
                    this.townText = capital + this.townText.slice(1)
                    this.mintemptext = result.data.data.min;
                    this.maxtemptext = result.data.data.max;
                    this.fivedaytext = result.data.data.next5;
                }

                // this.applyLanguage(phrase)
            } catch (error) {
                console.error(error);
            }
        },
        useData: function (data) {
            let data2Lenght = data.data2.list.length;
            this.main = data.data3.current.condition.text;
            this.town = data.data1.name;
            this.temp = data.data1.main.temp;
            this.mintemp = 15;
            this.maxtemp = 25;
            this.description = data.data1.weather[0].description;
            this.currentCode = data.data1.weather[0].id;
            this.mainId = this.getMainFromApi(this.main);
            this.callMain();
            this.callKeywords();
        },

        getForecast: function () {
            var self = this;

            let fetchWeatherData = async (lat, lon) => {
                let response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=1a71a377471dd00335cbe8d5ad69c944&units=metric
            `);
                let response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=1a71a377471dd00335cbe8d5ad69c944&units=metric
            `);

                let response3 = await fetch(`https://api.apixu.com/v1/current.json?key=330b9bb40cd5408e8eb104844182211&q=${lat},${lon}`);
                let data1 = await response1.json();
                let data2 = await response2.json();
                let data3 = await response3.json();
                return {
                    data1,
                    data2,
                    data3
                }
            };

            async function success(position) {
                let location = position.coords;
                let lat = location.latitude;
                let lon = location.longitude;
                let weatherData = await fetchWeatherData(lat, lon);
                self.useData(weatherData);
                let phrase = await self.callLanguageApi();
                await self.applyLanguage(phrase);
            }

            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }

            navigator.geolocation.getCurrentPosition(success, error, {
                enableHighAccuracy: true
            });
        }

    },

    mounted: function () {
        this.getForecast()

    }

});