//fetch the data from the open weather api

let fetchWeatherData = async (lat, lon) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=1a71a377471dd00335cbe8d5ad69c944&units=metric
    `);
    let data = await response.json();
    return data
};

//Geolocation
function success(position) {
    let location = position.coords;

    let lat = location.latitude;
    let lon = location.longitude;
    fetchWeatherData(lat, lon).then((weatherData) => {
        useData(weatherData);
    });
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
});