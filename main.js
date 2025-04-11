temperature.textContent = "Loading . . .";

fetch("https://api.open-meteo.com/v1/forecast?latitude=0.7551&longitude=73.4352&hourly=temperature_2m&current=temperature_2m,is_day,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m,showers,rain,weather_code&timezone=auto&forecast_days=1")

.then(response => response.json())

.then(data => {
    console.log(data);
    console.log(data.current.is_day);
    //1 for day, 0 for night
    console.log(data.current.weather_code);
    console.log(data.current.temperature_2m);
    console.log(data.current.wind_speed_10m);
    console.log(data.current.wind_gusts_10m);
    console.log(data.current.cloud_cover);

    temperature.textContent = data.current.temperature_2m + "°C";

});

const currentTemperature = document.getElementById('temperature');
const currentTime = document.getElementById('current-time');
const weatherIcon = document.getElementById('weather-icon');