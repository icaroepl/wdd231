const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");
const cityElement = document.querySelector("#name");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=81b2d628814bceca0c583e6e37a03d2a';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    const events = data.weather[0];
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${events.icon}@2x.png`;
    const desc = data.weather[0].description;
    const cityNameValue = data.name;
    const countryName = data.sys.country;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', events.description);
    captionDesc.textContent = desc;
    cityElement.textContent = cityNameValue + ", " + countryName;

}


apiFetch();