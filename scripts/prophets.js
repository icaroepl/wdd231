// JSON URL
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
// SELECT THE HTML DIV WITH ID VALUE CARDS
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const place = document.createElement("p");
        const date = document.createElement("p");

        // populate heading with full name
        fullName.textContent = `${prophet.name}${prophet.lastname}`;
        date.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent = `Place of birth: ${prophet.birthplace}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} `);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        card.appendChild(fullName);
        card.appendChild(date);
        card.appendChild(place);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

const getProphetData = async () => {
    try {
        const response = await fetch(url); // Wait for the fetch to complete
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status} `); // for example, a 404
        }
        const data = await response.json(); // Wait for the response to be converted to JSON
        // console.table(data.prophets); // Output the fetched data .log is unorganized
        displayProphets(data.prophets)
    } catch (error) {
        console.error(error);
    }
};



getProphetData();

