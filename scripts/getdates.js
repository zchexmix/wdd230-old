const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

var x = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

const visitsDisplay = document.querySelector('.visits');

let visitsNum = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (visitsNum !== 0) {
    visitsDisplay.textContent = visitsNum
}
else {
    visitsDisplay.textContent = "First time visitor? Welcome!";
}

visitsNum++;

localStorage.setItem("numVisits-ls", visitsNum);
