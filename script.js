const apiKey = 'c0c4d4750b02f43ca4884cc9f4eba67a'; 

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            if (response.status === 404) {
                     document.querySelector('.weather').style.display = 'none';

                throw new Error('City not found. Please check the name and try again.');
            }
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data);
        UICHANGE(data);
        
    } catch (error) {
        alert(error.message);
    }
}

function UICHANGE(data) {
     const temp =  data.main.temp.toFixed(2);
     const feelsLike = data.main.feels_like.toFixed(2);
     const city = data.name;
     const humidity = data.main.humidity;
     const windSpeed = data.wind.speed.toFixed(2);
     const weatherCondition = data.weather[0].main.toLowerCase();
     //console.log(weatherCondition);
     document.querySelector('.weather').style.display = 'block';
     



    document.querySelector('.temp').textContent = `${temp}°C`;
    document.querySelector('.feelLike').textContent = `Feels like: ${feelsLike}°C`;
    document.querySelector('.city').textContent = city;
    document.querySelector('.humidity').textContent = `${humidity}%`;
    document.querySelector('.wind').textContent = `${windSpeed} m/s`;
    document.querySelector('.weather-icon').src = `/images/${weatherCondition}.png`; // Ensure you have appropriate icons for different weather conditions
    
}



document.querySelector(".navi").addEventListener('click', () => {
    const city = document.getElementById('locationInput').value;
    if (city) {
        fetchWeather(city);
    }
});