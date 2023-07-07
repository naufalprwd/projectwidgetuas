<template>
    <div class="weather-widget">
      <h2 class="widget-title">Weather Widget</h2>
      <p>The widget's weather data is sample, once the widget's code is designed and placed in your site, the weather data will be relevant to the selected settlement.</p>
      <p>To find out the weather for your location, please enter your city </p>
      <div class="location-input">
        <label for="location">Enter Location: </label>
        <input type="text" id="location" v-model="location" />
        <button @click="fetchWeatherData">Get Weather</button>
      </div>
      <div class="weather-style">
        <div v-if="weatherData" class="weather-data">
          <p class="location">Location: {{ weatherData.name }}</p>
          <p v-if="weatherData.main" class="temperature">
            Temperature: {{ weatherData.main.temp }}°C
          </p>
          <p v-if="weatherData.weather" class="description">
            Description: {{ weatherData.weather[0].description }}
         </p>
      </div>
      <p v-else>Loading weather data...</p>
      <hr>
      <div class="comment">
        <h2>Leave the comment</h2>
        <p>Your email address will not published. Required fields are marked*</p>
        <form action="">
          <label for="username">Name*:</label>
          <input type="text" name="username" required>
          <label for="username"> Email*:</label>
          <input type="email" name="email" required>
          <br> <br>
          <label for="username">Website:</label>
          <input type="text" name="website">
          <label for="username"> Comment:</label>
          <input type="text" name="comment">
          <br> <br>
          <input type="submit">
        </form>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        location: '',
        weatherData: null
      };
    },
    methods: {
      async fetchWeatherData() {
        try {
          const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          this.weatherData = data;
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  button{
    background: chocolate;
    color: white;
    border-color: chocolate;
  }
  .comment{
    padding-top: 5%;
  }
  .weather-widget {
    border: 1px solid #ccc;
    padding: 20px;
    padding-bottom: 5%;
    text-align: justify;
    background-color: #f2f2f2;
  }
  .widget-title {
    margin-top: 0;
    color: #333;
  }
  .location-input {
    text-align: center;
    margin-bottom: 10px;
  }
  .weather-data {
    margin-top: 10px;
  }
  .weather-style {
    text-align: center;
  }
  .location {
    font-size: 18px;
    font-weight: bold;
  }
  .temperature {
    font-size: 24px;
    color: #ff5722;
  }
  .description {
    text-align: center;
    font-size: 16px;
  }
  </style>