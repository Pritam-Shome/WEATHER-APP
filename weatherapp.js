// This file contains the JavaScript logic for the weather app, handling user interactions, fetching weather data, and updating the UI accordingly.

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const weatherContainer = document.querySelector('.weather');
const locationInput = document.getElementById('locationInput');

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        alert(error.message);
    }
}

function updateUI(data) {
    const temp = Math.round(data.main.temp);
    const city = data.name;
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed);

    document.querySelector('.temp').textContent = `${temp}°C`;
    document.querySelector('.city').textContent = city;
    document.querySelector('.humidity').textContent = `${humidity}%`;
    document.querySelector('.wind').textContent = `${windSpeed} km/hr`;

    // Update weather icon based on weather condition
    const weatherIcon = document.querySelector('.weather-icon');
    const weatherCondition = data.weather[0].main.toLowerCase();
    weatherIcon.src = `/images/${weatherCondition}.png`; // Ensure you have appropriate icons for different weather conditions
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        const city = locationInput.value;
        if (city) {
            fetchWeather(city);
        }
    }
}

document.querySelector('button').addEventListener('click', () => {
    const city = locationInput.value;
    if (city) {
        fetchWeather(city);
    }
});