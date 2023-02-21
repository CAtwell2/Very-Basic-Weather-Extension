// Define the API URL and your API key
const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "a8bd9705cd9c93a039aaa160601c6116";

// Get the current weather data for your location
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  const url = `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Update the text content of the HTML elements with the weather data
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const location = data.name;

      document.getElementById("description").textContent = weatherDescription;
      document.getElementById("temperature").textContent = `${temperature}C`;
      document.getElementById("location").textContent = location;
    })
    .catch(error => {
      console.error(error);
    });
}, error => {
  console.error(error);
});


