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


// function updateTimestamp() {
 
//   var currentDateTime = new Date();
  

//   var formattedDateTime = currentDateTime.toLocaleString();
  

//   document.getElementById("#timeStamp").textContent = "Timestamp: " + formattedDateTime;
// }

// updateTimestamp();

const baseURL = "https://zchexmix.github.io/wdd230/";
const linksURL = "https://zchexmix.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#directory");
const myElement = document.getElement
const spotlight = document.querySelector('#spotlight');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);

    displaySpotlight(data.members);
}
getLinks();



const displaySpotlight = (members) => {
  // Shuffle the array to randomly select members
  const shuffledMembers = shuffleArray(members);

  // Display only three randomly selected members
  for (let i = 0; i < Math.min(3, shuffledMembers.length); i++) {
    const member = shuffledMembers[i];

    const section = document.createElement("section");
    const bizName = document.createElement("h3");
    const membership = document.createElement("p");

    bizName.textContent = `${member.name}: `;
    membership.textContent = `${member.membership} Level Membership`;

    section.appendChild(bizName);
    section.appendChild(membership);
    section.setAttribute('class', 'spotlights')
    spotlight.appendChild(section);
  }
};

// Function to shuffle array elements
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


