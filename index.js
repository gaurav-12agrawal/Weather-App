
let weather={
    apiKey:"f4da0c3e9361b3b0a390878d94b5d50e",   
    fetchWeather : function(city){
    fetch(
   "https://api.openweathermap.org/data/2.5/weather?q="
    +city
    +"&units=metric&appid=" 
    + this.apiKey
    )
    .then((response)=> {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
    .then((data)=>this.displayWeather(data));
   },
   
   displayWeather: function(data){
   const {name} = data;
   const {icon,description} = data.weather[0];
   const {temp,humidity} = data.main;
   const {speed} = data.wind;
   document.querySelector(".city").innerHTML= "Weather in " + name;
   document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon+"@2x.png";
   document.querySelector(".description").innerHTML=description
   document.querySelector(".tempreture").innerHTML=temp+ "°C"
   document.querySelector(".humidity").innerHTML="Humidity : " + humidity + "%"
   document.querySelector(".wind").innerHTML="Wind Speed : " + speed + " km/h"
   document.querySelector(".weather").classList.remove("loading")
   
    document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search : function(){
    this.fetchWeather(document.querySelector(".search_bar").value);
   }
   };
document.querySelector(".fa-solid").addEventListener("click",function(){
    weather.search();

})


weather.fetchWeather("jaipur");
// document.querySelector(".serach_bar").addEventListener("keypress",function(Event){
//     if(Event.key=="Enter")
//     weather.search();
// })
var el = document.getElementById(".serach_enter");

if(!el){
    addEventListener("keypress",function(Event){
            if(Event.key=="Enter")
            weather.search();
        })
}
