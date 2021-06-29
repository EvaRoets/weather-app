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
        const {temp } = data.main;
        const {icon, description} = data.weather[0];
        const {speed} = data.wind;
        console.log(name,description,temp,icon,speed);
    }
}






