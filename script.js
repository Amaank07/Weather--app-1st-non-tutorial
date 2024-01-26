// api call for weather : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=121663ab2a4bc9a420a4d28128de3e78&units=metric



//  reference of the city and search button
const cityName = document.querySelector("#city");
const search = document.querySelector('.search');

// reference of the weather informations to be displayed 

const weatherImg = document.querySelector(".weather-indicator")
const temprature  = document.querySelector(".temprature");
const displayName = document.querySelector(".city-name");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

const displayWeather = async  (value) =>{
   try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=121663ab2a4bc9a420a4d28128de3e78&units=metric`);
    const data = await res.json();
    console.log(Math.round(data.main.temp));
    console.log(data.weather[0].main);
    console.log(data.main.humidity);
    
    temprature.innerHTML=`${Math.round(data.main.temp)}°C`;
    displayName.innerHTML = cityName.value;
    humidity.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${data.wind.speed}km/h`
    if((data.weather[0].main)=='Clouds'){weatherImg.src='./images/clouds.png'; } 
    else if((data.weather[0].main)=='Mist' ||(data.weather[0].main)=='Haze'){weatherImg.src='./images/mist.png'; } 
    else if((data.weather[0].main)=='Clear'){weatherImg.src='./images/clear.png'; } 
    else if((data.weather[0].main)=='Drizzle'){weatherImg.src='./images/drizzle.png'; } 
    else if((data.weather[0].main)=='Rain'){weatherImg.src='./images/rain.png'; } 
    else if((data.weather[0].main)=='Snow'){weatherImg.src='./images/snow.png'; }  
   }
   catch(err){
    console.log(`This error is ${err}`);
    displayName.innerHTML = "City not found "
   }
}

// default for new york
const defaultFun = ()=>{
    const res = fetch(`https://api.openweathermap.org/data/2.5/weather?q=new york&appid=121663ab2a4bc9a420a4d28128de3e78&units=metric`);
    const data =  res.json();
    displayName.innerHTML = `New York`;
    temprature.innerHTML=`${Math.round(data.main.temp)}°C`;
    console.log(`is it here `)
    humidity.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${data.wind.speed}km/h`
    
    if((data.weather[0].main)=='Clouds'){weatherImg.src='./images/clouds.png'; } 
    else if((data.weather[0].main)=='Mist' ||(data.weather[0].main)=='Haze'){weatherImg.src='./images/mist.png'; } 
    else if((data.weather[0].main)=='Clear'){weatherImg.src='./images/clear.png'; } 
    else if((data.weather[0].main)=='Drizzle'){weatherImg.src='./images/drizzle.png'; } 
    else if((data.weather[0].main)=='Rain'){weatherImg.src='./images/rain.png'; } 
    else if((data.weather[0].main)=='Snow'){weatherImg.src='./images/snow.png'; }  
}

search.addEventListener('click',displayWeather);


defaultFun();