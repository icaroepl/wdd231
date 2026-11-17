const dataUrl = "data/events.json";
const eventLists = document.querySelector('#events');

const displayEvents = (events) => {
    eventLists.innerHTML = "";
    events.forEach((event) => {
        const section = document.createElement("section");
        const name = document.createElement("h3");
        const date = document.createElement("p");
        const adress = document.createElement("p");

        name.textContent = `${event.name}`;
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
        const response = await fetch(dataUrl);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status} `);
        }
        const data = await response.json();
        allEvents = data;
        displayEvents(allEvents)
    } catch (error) {
        console.error(error);
    }
};

getEventData();
displayEvents(allEvents);

