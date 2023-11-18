const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const dayOne = document.querySelector("#dayOne");
const dayTwo = document.querySelector("#dayTwo");
const dayThree = document.querySelector("#dayThree");


const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.8896139021846&lon=-111.88235297395136&appid=3f88f65f0095b43b5bf2ae9d6ffeba38";
// 40.8896139021846, -111.88235297395136
const urlDaily = "https://api.openweathermap.org/data/2.5/forecast?lat=40.8896139021846&lon=-111.88235297395136&appid=3f88f65f0095b43b5bf2ae9d6ffeba38&units=imperial";

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
    const tempFahrenheit = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(2);
    currentTemp.innerHTML = `Current Temp: ${tempFahrenheit} &deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/04n.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src' , `${iconSrc}`);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    captionDesc.textContent = `Bountiful Conditions: ${desc}`;
    dayOne.innerHTML = `Tomorrows Forecast - High: ${data2.list[0].main.temp_max}, Low: ${data2.list[0].main.temp_min} Condition: ${data2.list[0].weather[0].description}`;
    dayTwo.innerHTML = `In 2 Days - High: ${data2.list[1].main.temp_max}, Low: ${data2.list[1].main.temp_min} Condition: ${data2.list[1].weather[0].description}`;
    dayThree.innerHTML= `In 3 Days - High: ${data2.list[2].main.temp_max}, Low: ${data2.list[2].main.temp_min} Condition: ${data2.list[2].weather[0].description}`;

}



  