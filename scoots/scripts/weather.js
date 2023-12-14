const currentTemp = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const dayOne = document.querySelector("#today-forecast");
const dayTwo = document.querySelector("#feels-like");
const dayThree = document.querySelector("#tomorrow3p");
const todayHigh = document.querySelector("#closeable-message");


const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.423209&lon=-86.910561&appid=3f88f65f0095b43b5bf2ae9d6ffeba38&units=imperial";
// 20.423209, -86.910561
const urlDaily = "https://api.openweathermap.org/data/2.5/forecast?lat=20.423209&lon=-86.910561&appid=3f88f65f0095b43b5bf2ae9d6ffeba38&units=imperial";

async function apiFetch() {
    try {
  
      const response = await fetch(url);
      const response2 = await fetch(urlDaily);

      if (response.ok && response2.ok) {

        const data = await response.json();
        const data2 = await response2.json();
        console.log(data);
        console.log(data2);
        displayResults(data, data2);
        // return data;
      } else {

        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {

      console.error('An error occurred:', error.message);
    }    
    
}
apiFetch();


function displayResults(data, data2) {
    const tempFahrenheit = (data.main.temp);
    currentTemp.innerHTML = `<strong>Current Temp</strong>: ${tempFahrenheit} &deg;F`;
    // let humidity = data.main.humidity;
    humidity.innerHTML = `<strong>Humidity</strong>: ${data.main.humidity}%`;
    const iconSrc = `https://openweathermap.org/img/w/04n.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src' , `${iconSrc}`);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    captionDesc.textContent = `Cozumel Current Conditions: ${desc}`;
    todayHigh.innerHTML = `Today's high temperature: ${data.main.temp_max} &deg; - Stay Cool!`;
    dayTwo.innerHTML = `Feels like:  ${data.main.feels_like}&deg;`;
    dayThree.innerHTML= `Tomorrows Forecast @ 3pm: ${data2.list[5].main.temp}&deg;`;
    dayOne.innerHTML = `<strong>Todays</strong> Forecast - High: ${data.main.temp_max}&deg;, Low: ${data.main.temp_min}&deg;`;
}



  