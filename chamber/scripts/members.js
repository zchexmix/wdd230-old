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

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        const listElement = document.createElement("li");
        const aElement = document.createElement("a");
        aElement.setAttribute('href', lesson.links[0].url);
        aElement.textContent = `Week ${lesson.lesson}: ${lesson.links[0].title}`;


        cards.appendChild(listElement);
        listElement.appendChild(aElement);




    })

    
}

getLinks();