const goDark = document.querySelector("#dark-mode-switch");

document.addEventListener("DOMContentLoaded", function () {
    const goDark = document.querySelector("#dark-mode-switch");
    const body = document.querySelector("body");
  
    goDark.addEventListener("change", function () {
      if (goDark.checked) {
        body.classList.add("dark-mode");
      } else {
        body.classList.remove("dark-mode");
      }
    });
  });
  
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});