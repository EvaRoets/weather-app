let weather = {
    apiKey: "9c1a9692c7257945806ed5ade3b54eb0",
    //get weather - fetch API
    fetchWeather: function (city) {
        // 5 day fetch
        // https://api.openweathermap.org/data/2.5/forecast?q=Gent&cnt=5&units=metric&appid=9c1a9692c7257945806ed5ade3b54eb0
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&cnt=5&units=metric&appid="
            + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch((error) => console.log(error))
    },
    // 5 day display
    displayWeather: (data) => {
        let cityName = data.city.name
        document.querySelector(".city").innerText = "This week's weather in " + cityName;
        document.querySelectorAll(".card").forEach( (card) => {
            card.classList.remove("loading");
        })

        // day one
        let icon1 = data.list[0].weather[0].icon
        let des1 = data.list[0].weather[0].description
        let temp1 = data.list[0].main.temp
        let hum1 = data.list[0].main.humidity
        let speed1 = data.list[0].wind.speed

        document.getElementById("card1").querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon1 + ".png";
        document.getElementById("card1").querySelector(".description").innerText = des1[0].toUpperCase() + des1.slice(1);
        document.getElementById("card1").querySelector(".temp").innerText = temp1.toFixed(1) + "°C";
        document.getElementById("card1").querySelector(".humidity").innerText = hum1 + "% humidity";
        document.getElementById("card1").querySelector(".speed").innerText = (speed1 * 3.6).toFixed(1) + "km/h wind";

        // day two
        let icon2 = data.list[1].weather[0].icon
        let des2 = data.list[1].weather[0].description
        let temp2 = data.list[1].main.temp
        let hum2 = data.list[1].main.humidity
        let speed2 = data.list[1].wind.speed

        document.getElementById("card2").querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon2 + ".png";
        document.getElementById("card2").querySelector(".description").innerText = des2[0].toUpperCase() + des1.slice(1);
        document.getElementById("card2").querySelector(".temp").innerText = temp2.toFixed(1) + "°C";
        document.getElementById("card2").querySelector(".humidity").innerText = hum2 + "% humidity";
        document.getElementById("card2").querySelector(".speed").innerText = (speed2 * 3.6).toFixed(1) + "km/h wind";

        // day three
        let icon3 = data.list[2].weather[0].icon
        let des3 = data.list[2].weather[0].description
        let temp3 = data.list[2].main.temp
        let hum3 = data.list[2].main.humidity
        let speed3 = data.list[2].wind.speed

        document.getElementById("card3").querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon3 + ".png";
        document.getElementById("card3").querySelector(".description").innerText = des3[0].toUpperCase() + des3.slice(1);
        document.getElementById("card3").querySelector(".temp").innerText = temp3.toFixed(1) + "°C";
        document.getElementById("card3").querySelector(".humidity").innerText = hum3 + "% humidity";
        document.getElementById("card3").querySelector(".speed").innerText = (speed3 * 3.6).toFixed(1) + "km/h wind";

        // day four
        let icon4 = data.list[3].weather[0].icon
        let des4 = data.list[3].weather[0].description
        let temp4 = data.list[3].main.temp
        let hum4 = data.list[3].main.humidity
        let speed4 = data.list[3].wind.speed

        document.getElementById("card4").querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon4 + ".png";
        document.getElementById("card4").querySelector(".description").innerText = des4[0].toUpperCase() + des4.slice(1);
        document.getElementById("card4").querySelector(".temp").innerText = temp4.toFixed(1) + "°C";
        document.getElementById("card4").querySelector(".humidity").innerText = hum4 + "% humidity";
        document.getElementById("card4").querySelector(".speed").innerText = (speed4 * 3.6).toFixed(1) + "km/h wind";

        // day five
        let icon5 = data.list[4].weather[0].icon
        let des5 = data.list[4].weather[0].description
        let temp5 = data.list[4].main.temp
        let hum5 = data.list[4].main.humidity
        let speed5 = data.list[4].wind.speed

        document.getElementById("card5").querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon5 + ".png";
        document.getElementById("card5").querySelector(".description").innerText = des5[0].toUpperCase() + des5.slice(1);
        document.getElementById("card5").querySelector(".temp").innerText = temp5.toFixed(1) + "°C";
        document.getElementById("card5").querySelector(".humidity").innerText = hum5 + "% humidity";
        document.getElementById("card5").querySelector(".speed").innerText = (speed5 * 3.6).toFixed(1) + "km/h wind";
    },
    searchCity: function () {
        let cityInput = document.getElementById("location").value
        this.fetchWeather(cityInput);

    },
};

// link search to button
document.getElementById("btn").addEventListener("click", () => {
    weather.searchCity();
});

// link search to enter key
document.getElementById("location").addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        weather.searchCity(); // TODO: fix this
    }
});








