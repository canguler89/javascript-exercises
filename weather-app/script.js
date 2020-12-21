let dateNow =  new Date()
document.getElementById("date").innerHTML = dateNow

const api = {
    key: "cbf8e726741ef96b67c79530aab07a25",
    baseURL: "http://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);


function setQuery(e){
    if(e.keyCode == 13){
        getResults(searchBox.value)
        console.log(searchBox.value)
    }
}

// query = city name
function getResults(query){
    fetch(`${api.baseURL}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather)
    let city = document.querySelector(".location .city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    
    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector(".current .weather");
    weather_el.innerHTML = weather.weather[0].main

    let hiLow = document.querySelector('.hi-low');
    hiLow.innerHTML = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`
}