const temperature = document.getElementById('temperature');

temperature.textContent = "Temperature Unavailable";

fetch("https://api.open-meteo.com/v1/forecast?latitude=0.7551&longitude=73.4352&hourly=temperature_2m&current=temperature_2m,is_day,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m,showers,rain,weather_code&timezone=auto&forecast_days=1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.current.is_day);
        console.log(data.current.weather_code);
        console.log(data.current.temperature_2m);

        temperature.textContent = "Currently " + data.current.temperature_2m + "°C";

        updateWeatherIcon(data);
    });

function updateWeatherIcon(data) {
    const isDay = data.current.is_day;
    const weatherCode = data.current.weather_code;
    let iconPath;
    const weatherIcon = document.getElementById("weather-icon");

    if (isDay === 1) {
        if (weatherCode >= 0 && weatherCode <= 1) {
        iconPath = "./media/icons/weather/weather-day-sun.png";
        } else if (weatherCode === 2) {
            iconPath = "./media/icons/weather/weather-day-sun-cloudy.png"
        } else if (weatherCode >= 3 && weatherCode <= 60) {
            iconPath = "./media/icons/weather/weather-day-cloudy.png"
        } else if (weatherCode >= 61 && weatherCode <= 62) {
            iconPath = "./media/icons/weather/weather-day-light-rain.png"
        } else if (weatherCode >= 63 && weatherCode <= 75) {
            iconPath = "./media/icons/weather/weather-day-heavy-rain.png"
        } else if (weatherCode >= 76 && weatherCode <= 80) {
            iconPath = "./media/icons/weather/weather-day-light-rain.png"
        } else if (weatherCode >= 81 && weatherCode <= 82) {
            iconPath = "./media/icons/weather/weather-day-heavy-rain.png"
        } 
    } else if (isDay === 0) {
        if (weatherCode >= 0 && weatherCode <= 1) {
        iconPath = "./media/icons/weather/weather-night-moon.png";
        } else if (weatherCode === 2) {
            iconPath = "./media/icons/weather/weather-night-moon-cloudy.png"
        } else if (weatherCode >= 3 && weatherCode <= 60) {
            iconPath = "./media/icons/weather/weather-night-cloudy.png"
        } else if (weatherCode >= 61 && weatherCode <= 62) {
            iconPath = "./media/icons/weather/weather-night-light-rain.png"
        } else if (weatherCode >= 63 && weatherCode <= 75) {
            iconPath = "./media/icons/weather/weather-night-heavy-rain.png"
        } else if (weatherCode >= 76 && weatherCode <= 80) {
            iconPath = "./media/icons/weather/weather-night-light-rain.png"
        } else if (weatherCode >= 81 && weatherCode <= 82) {
            iconPath = "./media/icons/weather/weather-night-heavy-rain.png"
        } 
    }

    weatherIcon.src = iconPath;

}