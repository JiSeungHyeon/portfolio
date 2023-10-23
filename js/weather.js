import {API_KEY} from "./env.js";

const getCurrentWeather = (latitude,longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const city = document.querySelector('.city');
    const icon = document.querySelector('.icon');

    city.innerText = data.name;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  });
};
function setIcons(icon,iconID){
  const skycons = new Skycons({color :"white"});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons[currentIcon]);
};

const getPosition = (position) => {
  const{latitude,longitude} = position.coords;
  getCurrentWeather(latitude,longitude);
};

const errorHandler = (error) => {
  const noti = document.querySelector('.noti');
  noti.style.display = 'block';
  const weather = document.querySelector('.weather-container');
  weather.style.display = "none";
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition,errorHandler);

} else {
  console.log('geolocation IS NOT available');
}