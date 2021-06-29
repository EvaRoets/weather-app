// fetch API weather
let weather = {
    apiKey: "9c1a9692c7257945806ed5ade3b54eb0",
    fetchWeather: function (city){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" // adjust url
            + city
            + "&cnt=5&units=metric&appid=" //add number of days
            + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch((error) => console.log(error))
    },
    // make 5 day display
    // https://api.openweathermap.org/data/2.5/forecast?q=Gent&cnt=5&units=metric&appid=9c1a9692c7257945806ed5ade3b54eb0
    displayWeather: function(data){
        const {name} = data.city;
        const {sunrise, sunset} = data.city;

        function index () {
            let city = document.querySelector(".city")
            let sunrise = document.querySelector(".sunrise")
            let sunset = document.querySelector(".sunset")

            city.innerText = "This week's weather in " + name;
            sunrise.innerText = sunrise;
            sunset.innerText = sunset;


        // card one
        const {temp, humidity} = data.list[0].main;
        const {icon, description1} = data.list[0].weather[0];
        const {speed1} = data.list[0].wind;
        document.getElementById("temp1").innerText =  temp.toFixed(1) + "°C";
        document.getElementById("icon1").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("des1").innerText = description[0].toUpperCase() + description1.slice(1);
        document.getElementById("hum1").innerText = humidity + "% humidity";
        document.getElementById("speed1").innerText = (speed1*3.6).toFixed(1)  + "km/h wind";

        // card two
        const {temp, humidity} = data.list[1].main;
        const {icon, description} = data.list[1].weather[0];
        const {speed} = data.list[1].wind;
        console.log(name,description,temp,icon,speed);
        document.getElementById("temp2").innerText =  temp.toFixed(1) + "°C";
        document.getElementById("icon2").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("des2").innerText = description[0].toUpperCase() + description.slice(1);
        document.getElementById("hum2").innerText = humidity + "% humidity";
        document.getElementById("speed2").innerText = (speed*3.6).toFixed(1)  + "km/h wind";

        // card three
        const {temp, humidity} = data.list[2].main;
        const {icon, description} = data.list[2].weather[0];
        const {speed} = data.list[2].wind;
        console.log(name,description,temp,icon,speed);
        document.getElementById("temp3").innerText =  temp.toFixed(1) + "°C";
        document.getElementById("icon3").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("des3").innerText = description[0].toUpperCase() + description.slice(1);
        document.getElementById("hum3").innerText = humidity + "% humidity";
        document.getElementById("speed3").innerText = (speed*3.6).toFixed(1)  + "km/h wind";

        // card four
        const {temp, humidity} = data.list[3].main;
        const {icon, description} = data.list[3].weather[0];
        const {speed} = data.list[3].wind;
        console.log(name,description,temp,icon,speed);
        document.getElementById("temp4").innerText =  temp.toFixed(1) + "°C";
        document.getElementById("icon4").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("des4").innerText = description[0].toUpperCase() + description.slice(1);
        document.getElementById("hum4").innerText = humidity + "% humidity";
        document.getElementById("speed4").innerText = (speed*3.6).toFixed(1)  + "km/h wind";

        // card five
        const {temp, humidity} = data.list[4].main;
        const {icon, description} = data.list[4].weather[0];
        const {speed} = data.list[4].wind;
        console.log(name,description,temp,icon,speed);
        document.getElementById("temp5").innerText =  temp.toFixed(1) + "°C";
        document.getElementById("icon5").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("des5").innerText = description[0].toUpperCase() + description.slice(1);
        document.getElementById("hum5").innerText = humidity + "% humidity";
        document.getElementById("speed5").innerText = (speed*3.6).toFixed(1)  + "km/h wind";


        }
    }
}








// grab form submit (mouse click or enter key)
// stop form submitting





