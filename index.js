let weather ={
    "apikey" : "d1314a720dcf4bdb7232d8e6188660f6",
    fetchWeatherData: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apikey)
        .then((response)=>response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name }=data;
        const { icon,description }=data.weather[0];
        const { temp,pressure,humidity, }=data.main;
        const { speed }=data.wind;
        console.log(name,icon,description,temp,humidity,pressure,speed);
        
        document.querySelector(".city").innerText="Weather in "+ name;
        document.querySelector(".temp ").innerText=temp +"°C";
        document.querySelector(".WeatherConditionImage").src="http://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".WeatherCondition").innerText=description;
        document.querySelector(".humidity").innerText="Humidity : "+humidity+"%"
        document.querySelector(".wind").innerText="Wind Speed : " +speed+ "km/h"
        document.querySelector(".pressure").innerText="Pressure : " +pressure;
        document.querySelector(".weather").classList.remove("starting")
  
    },
    search : function(){
        this.fetchWeatherData(document.querySelector("#search").value);
    }
};

document.querySelector(".button").addEventListener("click",function (){
    weather.search();

})
document.querySelector("#search").addEventListener("keyup",function(event){
    if (event.key=="Enter") {
        weather.search();
    }
}) 

weather.fetchWeatherData("chennai")