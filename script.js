var searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click",searchPlace)
const KEY = "af7f5431cf8002948ad020ea231c733e"

function searchPlace(){
//when I click search, get the value entered by user
let city = document.getElementById("destination").value.trim();
//check if anything was entered, if not send warning message
if (city.length == 0){
    alert("please enter a valid city")
    return

}
//if something valid is entered call API
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${KEY}`)
.then(response => response.json())
.then(data => {
    var lat = data[0].lat
    var lon =data[0].lon
    var name =data[0].name + ", " + data[0].state
    getWeather(lat,lon,name)
    console.log(data)
    }
    )
}

function getWeather(lat,lon,name){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${KEY}`)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    var temperature = data.current.temp
    var humidity = data.current.humidity
    var windSpeed = data.current.wind_speed
    var uv = data.current.uvi
    var icon = data.current.weather[0].icon
    }
    )
}


var iconElement = document.createElement('img')
iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${icon}.png`);

//wait for and process API response 

//fetch('https://api.openweathermap.org/data/3.0/onecall?lat=51.5085&lon=-0.1257&appid=af7f5431cf8002948ad020ea231c733e')

//HAVE THIS CHECKED
//(document.addEventListener("[search]"), function(searchPlace){ [
    //fetch('https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&appid=af7f5431cf8002948ad020ea231c733e')
  //.then(response => response.json())
  //.then(data => console.log(data))
//]
//});
//use geo coding api (city variable)

//put APIs into functions with event listeners for "search"

//research NOTES REMOVE BEFORE SUBMIT
//Using “pure” JavaScript:
// (document.addEventListener("[eventName]", function(e) { [ ... Code ... ] }));

//push response to webpage
//add entered city to the list of searched cities 
