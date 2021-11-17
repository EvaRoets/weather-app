let weather = {
    apiKey: "9c1a9692c7257945806ed5ade3b54eb0",
    //fetch API
    fetchWeather: function (city) {
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
        let cityOutput = document.querySelector(".city")
        const card = document.querySelectorAll(".card")

        cityOutput.innerText = "This week's weather in " + cityName;
        card.forEach((card) => {
            card.classList.remove("loading");
        })

        // day one
        const icon1 = data.list[0].weather[0].icon
        let des1 = data.list[0].weather[0].description
        let temp1 = data.list[0].main.temp
        let hum1 = data.list[0].main.humidity
        let speed1 = data.list[0].wind.speed
        const card1 = document.getElementById("card1")

        card1.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon1 + ".png";
        card1.querySelector(".description").innerText = des1[0].toUpperCase() + des1.slice(1);
        card1.querySelector(".temp").innerText = temp1.toFixed(1) + "°C";
        card1.querySelector(".humidity").innerText = hum1 + "% humidity";
        card1.querySelector(".speed").innerText = (speed1 * 3.6).toFixed(1) + "km/h wind";

        // day two
        let icon2 = data.list[1].weather[0].icon
        let des2 = data.list[1].weather[0].description
        let temp2 = data.list[1].main.temp
        let hum2 = data.list[1].main.humidity
        let speed2 = data.list[1].wind.speed
        const card2 = document.getElementById("card2")


        card2.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon2 + ".png";
        card2.querySelector(".description").innerText = des2[0].toUpperCase() + des2.slice(1);
        card2.querySelector(".temp").innerText = temp2.toFixed(1) + "°C";
        card2.querySelector(".humidity").innerText = hum2 + "% humidity";
        card2.querySelector(".speed").innerText = (speed2 * 3.6).toFixed(1) + "km/h wind";

        // day three
        let icon3 = data.list[2].weather[0].icon
        let des3 = data.list[2].weather[0].description
        let temp3 = data.list[2].main.temp
        let hum3 = data.list[2].main.humidity
        let speed3 = data.list[2].wind.speed
        const card3 = document.getElementById("card3")

        card3.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon3 + ".png";
        card3.querySelector(".description").innerText = des3[0].toUpperCase() + des3.slice(1);
        card3.querySelector(".temp").innerText = temp3.toFixed(1) + "°C";
        card3.querySelector(".humidity").innerText = hum3 + "% humidity";
        card3.querySelector(".speed").innerText = (speed3 * 3.6).toFixed(1) + "km/h wind";

        // day four
        let icon4 = data.list[3].weather[0].icon
        let des4 = data.list[3].weather[0].description
        let temp4 = data.list[3].main.temp
        let hum4 = data.list[3].main.humidity
        let speed4 = data.list[3].wind.speed
        const card4 = document.getElementById("card4")

        card4.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon4 + ".png";
        card4.querySelector(".description").innerText = des4[0].toUpperCase() + des4.slice(1);
        card4.querySelector(".temp").innerText = temp4.toFixed(1) + "°C";
        card4.querySelector(".humidity").innerText = hum4 + "% humidity";
        card4.querySelector(".speed").innerText = (speed4 * 3.6).toFixed(1) + "km/h wind";

        // day five
        let icon5 = data.list[4].weather[0].icon
        let des5 = data.list[4].weather[0].description
        let temp5 = data.list[4].main.temp
        let hum5 = data.list[4].main.humidity
        let speed5 = data.list[4].wind.speed
        const card5 = document.getElementById("card5")

        card5.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon5 + ".png";
        card5.querySelector(".description").innerText = des5[0].toUpperCase() + des5.slice(1);
        card5.querySelector(".temp").innerText = temp5.toFixed(1) + "°C";
        card5.querySelector(".humidity").innerText = hum5 + "% humidity";
        card5.querySelector(".speed").innerText = (speed5 * 3.6).toFixed(1) + "km/h wind";
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
        weather.searchCity();
    }
});





