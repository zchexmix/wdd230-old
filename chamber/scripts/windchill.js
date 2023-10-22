
window.addEventListener('load', (event) => {
    const temperatureElement = document.getElementById('temperature');
    const windspeedElement = document.getElementById('windspeed');
    const windchillElement = document.getElementById('windchill');


    const currentTemperature = 30; 
    const currentWindSpeed = 5;

 
    if (currentTemperature <= 50 && currentWindSpeed > 3.0) {
        const windChill = calculateWindChill(currentTemperature, currentWindSpeed);
        windchillElement.textContent = `${windChill.toFixed(2)} °F`;
    } else {
        windchillElement.textContent = "N/A";
    }

    temperatureElement.textContent = `${currentTemperature} °F`;
    windspeedElement.textContent = `${currentWindSpeed} mph`;
});

function calculateWindChill(temperature, windSpeed) {
   
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}
