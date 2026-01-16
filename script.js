const apiKey = "974932f9ad93b0a826100fe7fa9d5fd2";

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                return response.json().then(errData => {
                    throw new Error(errData.message || "City not found");
                });
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText = `🌡 Temperature: ${data.main.temp} °C`;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            alert(error.message); // Show the specific error (e.g., "Invalid API key")
            console.error("Error fetching weather data:", error);
        });
}