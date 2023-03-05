const API_KEY = "a96526ee9fa269ca1d4e36d559b05fbc";

function onGeoOk(position) {
    const lat = position.coords.latitude;  // 위도
    const lon = position.coords.longitude;  // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // 1. call the url
    // 2. response 받기
    // 3. response의  json 얻기
    fetch(url)
        .then((response) => response.json())
        .then((data) => {            
            const city = document.querySelector("#weather span:last-child");
            const weather = document.querySelector("#weather span:first-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
    }

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// user의 위치를 가져옴
/* getCurrentPosition은 2개의 argument가 필요 
 --> (모든 것이 잘 되었을 때 실행할 함수, 에러 발생시 실행될 함수) */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);