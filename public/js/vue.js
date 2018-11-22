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
        selected: 'Nothing'
    },
    computed: {

    },

    methods: {
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
        useData: function (data) {
            let data2Lenght = data.data2.list.length;
            this.main = data.data1.weather[0].main;
            this.town = data.data1.name;
            this.temp = data.data1.main.temp;
            this.mintemp = data.data2.list[39].main.temp_min;
            this.maxtemp = data.data2.list[0].main.temp_max;
            this.description = data.data1.weather[0].description;
            this.currentCode = data.data1.weather[0].id;

        },

        getForecast: function () {
            var self = this;

            let fetchWeatherData = async (lat, lon) => {
                let response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=1a71a377471dd00335cbe8d5ad69c944&units=metric
            `);
                let response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=1a71a377471dd00335cbe8d5ad69c944&units=metric
            `);



                let data1 = await response1.json();
                let data2 = await response2.json();
                return {
                    data1,
                    data2
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


    }

});