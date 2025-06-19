# Weather App

A simple and modern weather application that lets you search for the current weather in any city. The app fetches real-time weather data from the OpenWeatherMap API and displays temperature, humidity, wind speed, and weather conditions with attractive icons.

## Features

- Search weather by city name
- Displays temperature (to 2 decimal places), feels-like temperature, humidity, and wind speed
- Dynamic weather icons based on current conditions
- Responsive and modern UI

## Project Structure

```
WEATHER-APP/
│
├── images/
│   ├── humidity.png
│   ├── rain.png
│   ├── search.png
│   ├── wind.png
│   └── ... (other weather icons)
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Setup

1. **Clone the repository**  
   ```
   git clone https://github.com/Pritam-Shome/WEATHER-APP
   ```

2. **Get an OpenWeatherMap API Key**  
   - Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
   - Go to the API keys section and copy your API key

3. **Configure the API Key**  
   - Open `script.js`
   - Replace the value of `apiKey` with your API key:
     ```js
     const apiKey = 'YOUR_API_KEY';
     ```

4. **Run the App**  
   - Open `index.html` in your browser

## Usage

- Enter a city name in the input field and click the search button (magnifying glass)
- The app will display the current weather, temperature, humidity, wind speed, and an icon representing the weather condition

## Customization

- Add more weather icons to the `images/` folder for different weather conditions (e.g., `clear.png`, `clouds.png`, etc.)
- Update styles in `style.css` to match your preferences

## License

This project is licensed under the MIT License.

---

**Note:**  
Do not share your API key publicly. If you plan to publish this project, consider using environment variables or server-side code to protect your API key.