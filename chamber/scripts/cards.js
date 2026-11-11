// JSON URL
const url = "data/members.json";
// SELECT THE HTML DIV WITH ID VALUE CARDS
const cards = document.querySelector('.cards');
const lists = document.querySelector('.lists');

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#lists");

let isGrid = true;

gridbutton.addEventListener("click", () => {
    displayGrid(allMembers);
    cards.classList.add("grid");
    cards.classList.remove("list");
    isGrid = true;
});
listbutton.addEventListener("click", () => {
    displayList(allMembers);
    cards.classList.add("list");
    cards.classList.remove("grid");
    isGrid = false;
});

const displayGrid = (members) => {
    // clean lists
    cards.innerHTML = "";
    members.forEach((member) => {
        // create html parts
        const card = document.createElement("section");
        const top = document.createElement("div");
        const Name = document.createElement("h2");
        const category = document.createElement("p");
        const bottom = document.createElement("div");
        const image = document.createElement("img");
        const info = document.createElement("div");
        const website = document.createElement("p");
        const phone = document.createElement("p");
        const adress = document.createElement("p");

        // populate heading 
        Name.textContent = `${member.name}`;
        category.textContent = `${member.category}`;
        // populate info
        website.textContent = `URL: ${member.website}`;
        phone.textContent = `Phone: ${member.phone}`;
        adress.textContent = `Adress:${member.addresses}`;

        top.classList.add("top");
        bottom.classList.add("bottom");

        // img atributes
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `Image of ${member.name}`);
        image.setAttribute('loading', 'eager');
        image.setAttribute('fetchpriority', 'high');
        image.setAttribute('width', '300');
        image.setAttribute('height', '300');


        card.appendChild(top);
        top.appendChild(Name)
        top.appendChild(category)
        card.appendChild(bottom);
        bottom.appendChild(image);
        bottom.appendChild(info);
        info.appendChild(website);
        info.appendChild(phone);
        info.appendChild(adress);
        cards.appendChild(card);

    });
}

const displayList = (members) => {
    cards.innerHTML = "";
    // clean lists
    members.forEach((member) => {
        // create html parts
        const card = document.createElement("section");
        const name = document.createElement("p");
        const phone = document.createElement("p");
        const adress = document.createElement("p");
        const website = document.createElement("p");

        // populate heading 
        name.textContent = `${member.name}`;
        // populate info
        website.textContent = `${member.website}`;
        phone.textContent = `${member.phone}`;
        adress.textContent = `${member.addresses}`;

        card.classList.add("list");
        card.appendChild(name);
        card.appendChild(phone)
        card.appendChild(website)
        card.appendChild(adress)
        cards.appendChild(card);
    });
}

let allMembers = [];

const getCardData = async () => {
    try {
        const response = await fetch(url); // Wait for the fetch to complete
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status} `); // for example, a 404
        }
        const data = await response.json(); // Wait for the response to be converted to JSON
        // Output the fetched data .log is unorganized
        allMembers = data;
        if (isGrid) {
            displayGrid(allMembers)
        }
        else {
            displayList(allMembers)
        }
    } catch (error) {
        console.error(error);
    }
};

getCardData();

