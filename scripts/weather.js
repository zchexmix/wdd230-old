const currentTemp = document.querySelector("#currentTemp");
const weatherIcon = document.querySelector("#weatherIcon");
const captionDesc = document.querySelector("#description");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=51.50557201323875&lon=-0.1292321065183208&appid=3f88f65f0095b43b5bf2ae9d6ffeba38";
// 51.50557201323875, -0.1292321065183208

async function apiFetch() {
    try {
  
      const response = await fetch(url);
  

      if (response.ok) {

        const data = await response.json();
        // console.log(data);
        displayResults(data);
        // return data;
      } else {

        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {

      console.error('An error occurred:', error.message);
    }    
    
}
apiFetch();


function displayResults(data) {
    const tempFahrenheit = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(2);
    currentTemp.innerHTML = `Current Temp: ${tempFahrenheit} &deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/04n.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src' , `${iconSrc}`);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    captionDesc.textContent = `Conditions are currently: ${desc}`;
}



  