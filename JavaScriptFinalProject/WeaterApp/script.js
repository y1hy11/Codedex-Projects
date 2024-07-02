let apiKey = "1ab36ff8b3ca6cbbc5a3b7bd9bb99789"; 

function fetchWeather() {
  let searchInput = document.getElementById("search").value;
  const weatherDataSection = document.getElementById("weather-data");
  weatherDataSection.style.display = "flex";

  if (searchInput == "") {
    weatherDataSection.innerHTML = `
    <div>
      <h2>Empty Input!</h2>
      <p>Please try again with a valid <u>city name</u>.</p>
    </div>`;
    return;
  }
  
  document.getElementById("search").value = "";
  getLonAndLat(searchInput);
}

async function getLonAndLat(searchInput) {
  const countryCode = 1; // specify the country code
  const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}`;
  const response = await fetch(geocodeURL);
  
  if (!response.ok) {
    console.log("Bad response! ", response.status);
    return;
  }
  
  const data = await response.json();
  
  if (data.length == 0) {
    console.log("Something went wrong here.");
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.innerHTML = `
    <div>
      <h2>Invalid Input: "${searchInput}"</h2>
      <p>Please try again with a valid <u>city name</u>.</p>
    </div>
    `;
    return;
  } else {
    getWeatherData(data[0].lon, data[0].lat);
  }
}

async function getWeatherData(lon, lat) {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const response = await fetch(weatherURL);
  
  if (!response.ok) {
    console.log("Bad response! ", response.status);
    return;
  }
  
  const data = await response.json();
  const weatherDataSection = document.getElementById("weather-data");
  weatherDataSection.style.display = "flex";
  weatherDataSection.innerHTML = `
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" width="100" />
  <div>
    <h2>${data.name}</h2>
    <p><strong>Temperature:</strong> ${Math.round(data.main.temp - 273.15)}°C</p>
    <p><strong>Description:</strong> ${data.weather[0].description}</p>
  </div> `
}