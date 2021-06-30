// fetch API weather
    // apiKey: "9c1a9692c7257945806ed5ade3b54eb0"
let weatherApp = {
    apiKey: "9c1a9692c7257945806ed5ade3b54eb0",
    //get weather
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey)
            // fetch("https://api.openweathermap.org/data/2.5/forecast?q=" // adjust url
            //     + city
            //     + "&cnt=5&units=metric&appid=" //add number of days
            //     + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch((error) => console.log(error))
    },
    //display weather
    displayWeather: function (data) {
        const {name} = data;
        const {temp, humidity} = data.main;
        const {icon, description} = data.weather[0];
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "This week's weather in " + name;
        document.querySelector(".temp").innerText = temp.toFixed(1) + "°C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description[0].toUpperCase() + description.slice(1);
        document.querySelector(".humidity").innerText = humidity + "% humidity";
        document.querySelector(".speed").innerText = (speed * 3.6).toFixed(1) + "km/h wind";
    },
    searchCity: function () {
        // get form value
        let cityInput = document.getElementById("location").value
        //get weather for form value
        this.fetchWeather(cityInput);
    }
};
// make 5 day display
    // https://api.openweathermap.org/data/2.5/forecast?q=Gent&cnt=5&units=metric&appid=9c1a9692c7257945806ed5ade3b54eb0

// // day one
// {temp, humidity} = data.list[1].main;
// {icon, description} = data.list[1].weather[0];
// {speed} = data.list[1].wind;
//
// let temp1 = document.getElementById("temp1")
// let icon1 = document.getElementById("icon1")
// let des1 = document.getElementById("des1")
// let hum1 = document.getElementById("hum1")
// let speed1 = document.getElementById("speed1")
//
// temp1.innerText = temp.toFixed(1) + "°C";
// icon1.src = "http://openweathermap.org/img/wn/" + icon + ".png";
// des1.innerText = description[0].toUpperCase() + description.slice(1);
// hum1.innerText = humidity + "% humidity";
// speed1.innerText = (speed1*3.6).toFixed(1)  + "km/h wind";
//
// // day two
// {temp, humidity} = data.list[1].main;
// {icon, description} = data.list[1].weather[0];
// {speed} = data.list[1].wind;
// console.log(name,description,temp,icon,speed);
//
// let temp2 = document.getElementById("temp2")
// let icon2 = document.getElementById("icon2")
// let des2 = document.getElementById("des2")
// let hum2 = document.getElementById("hum2")
// let speed2 = document.getElementById("speed2")
//
// temp2.innerText =  temp.toFixed(1) + "°C";
// icon2.src = "http://openweathermap.org/img/wn/" + icon + ".png";
// des2.innerText = description[0].toUpperCase() + description.slice(1);
// hum2.innerText = humidity + "% humidity";
// speed2.innerText = (speed*3.6).toFixed(1)  + "km/h wind";
//
// // day three
// const {temp, humidity} = data.list[2].main;
// const {icon, description} = data.list[2].weather[0];
// const {speed} = data.list[2].wind;
// console.log(name,description,temp,icon,speed);
// document.getElementById("temp3").innerText =  temp.toFixed(1) + "°C";
// document.getElementById("icon3").src = "http://openweathermap.org/img/wn/" + icon + ".png";
// document.getElementById("des3").innerText = description[0].toUpperCase() + description.slice(1);
// document.getElementById("hum3").innerText = humidity + "% humidity";
// document.getElementById("speed3").innerText = (speed*3.6).toFixed(1)  + "km/h wind";
//
// // day four
// const {temp, humidity} = data.list[3].main;
// const {icon, description} = data.list[3].weather[0];
// const {speed} = data.list[3].wind;
// console.log(name,description,temp,icon,speed);
// document.getElementById("temp4").innerText =  temp.toFixed(1) + "°C";
// document.getElementById("icon4").src = "http://openweathermap.org/img/wn/" + icon + ".png";
// document.getElementById("des4").innerText = description[0].toUpperCase() + description.slice(1);
// document.getElementById("hum4").innerText = humidity + "% humidity";
// document.getElementById("speed4").innerText = (speed*3.6).toFixed(1)  + "km/h wind";
//
// // day five
// const {temp, humidity} = data.list[4].main;
// const {icon, description} = data.list[4].weather[0];
// const {speed} = data.list[4].wind;
// console.log(name,description,temp,icon,speed);
// document.getElementById("temp5").innerText =  temp.toFixed(1) + "°C";
// document.getElementById("icon5").src = "http://openweathermap.org/img/wn/" + icon + ".png";
// document.getElementById("des5").innerText = description[0].toUpperCase() + description.slice(1);
// document.getElementById("hum5").innerText = humidity + "% humidity";
// document.getElementById("speed5").innerText = (speed*3.6).toFixed(1)  + "km/h wind";

// link search to button
document.getElementById("btn").addEventListener("click", function () {
    //weather.fetchWeather("cityInput")
    weather.searchCity();
});

// link search to enter key
document.getElementById("location").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        weather.searchCity();

    }
});


// when search bar empty = no cards/displayed days
// make all functions arrow functions
// add responsiveness
// check requirements







