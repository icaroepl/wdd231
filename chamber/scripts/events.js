// JSON URL
const dataUrl = "data/events.json";
// SELECT THE HTML DIV WITH ID VALUE CARDS
const eventLists = document.querySelector('#events');

const displayEvents = (events) => {
    eventLists.innerHTML = "";
    // clean lists
    events.forEach((event) => {
        // create html parts
        const section = document.createElement("section");
        const name = document.createElement("h3");
        const date = document.createElement("p");
        const adress = document.createElement("p");

        // populate heading 
        name.textContent = `${event.name}`;
        // populate info
        date.textContent = `${event.date}`;
        adress.textContent = `${event.neighborhood}`;

        section.classList.add("event-list");
        section.appendChild(name);
        section.appendChild(date)
        section.appendChild(adress)
        eventLists.appendChild(section);
    });
}

let allEvents = [];

const getEventData = async () => {
    try {
        const response = await fetch(dataUrl); // Wait for the fetch to complete
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status} `); // for example, a 404
        }
        const data = await response.json(); // Wait for the response to be converted to JSON
        // Output the fetched data .log is unorganized
        allEvents = data;
        displayEvents(allEvents)
    } catch (error) {
        console.error(error);
    }
};

getEventData();
displayEvents(allEvents);

