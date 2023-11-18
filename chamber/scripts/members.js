const baseURL = "https://zchexmix.github.io/wdd230/";
const linksURL = "https://zchexmix.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#directory");
const myElement = document.getElement

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);

    displayLinks(data.members);

}

const displayLinks = (members) => {
    members.forEach((member) => {
        const section = document.createElement("section");
        const bizName = document.createElement("h3");
        const number = document.createElement("p");
        const address = document.createElement("p");
        const url = document.createElement("p");
        const membership = document.createElement("p");
        const bizImage = document.createElement("img");

        bizName.textContent = member.name;
        number.textContent = member.number;
        address.textContent = member.address;
        url.textContent = member.url;
        membership.textContent = member.membership;

        section.appendChild(bizName);
        section.appendChild(number);
        section.appendChild(address);
        section.appendChild(url);
        section.appendChild(membership);
        section.appendChild(bizImage);

        bizImage.setAttribute('src', member.image);
        bizImage.setAttribute('alt', member.name);
        bizImage.setAttribute('loading' , 'lazy');
        bizImage.setAttribute('width' , '200');
        bizImage.setAttribute('height' , '100');

        


        cards.appendChild(section);
        // listElement.appendChild(aElement);




    })

    
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

getLinks();