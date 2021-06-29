// grab form submit (mouse click or enter key)
// stop form submitting

// fetch API weather
let weather = {
    apiKey: "9c1a9692c7257945806ed5ade3b54eb0",
    fetchWeather: function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch((error) => console.log(error))
    },
    displayWeather: function(data){
        const {name} = data;
        const {temp, humidity} = data.main;
        const {icon, description} = data.weather[0];
        const {speed} = data.wind;
        console.log(name,description,temp,icon,speed);
        document.querySelector(".city").innerText = "This week's weather in " + name;
        document.querySelector(".temp").innerText =  temp.toFixed(1) + "°C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description[0].toUpperCase() + description.slice(1);
        document.querySelector(".humidity").innerText = humidity + "% humidity";
        document.querySelector(".speed").innerText = (speed*3.6).toFixed(1)  + "km/h wind";

    }
}






