const baseURL = "https://zchexmix.github.io/wdd230/";
const linksURL = "https://zchexmix.github.io/wdd230/data/links.json";
const cards = document.querySelector("#assignments");
const myElement = document.getElement

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);

    displayLinks(data.lessons);

}

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        const listElement = document.createElement("li");
        const aElement = document.createElement("a");
        aElement.setAttribute('href', lesson.links);
        aElement.textContent(lesson.lesson);


        cards.appendChild(listElement);
        listElement.appendChild(assignmentList);




    })

    
}

getLinks();