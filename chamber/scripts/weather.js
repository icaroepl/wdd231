const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");
const cityElement = document.querySelector("#name");

const forecastDiv = document.querySelector("#future-temp");


weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-20.19&lon=-40.26&units=metric&appid=81b2d628814bceca0c583e6e37a03d2a';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-20.19&lon=-40.26&units=metric&appid=81b2d628814bceca0c583e6e37a03d2a';
async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
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

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayForecast(data) {
    forecastDiv.innerHTML = data.list
        .filter(item => item.dt_txt.includes("15:00:00")).slice(0, 3).map(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
            return `<p>${date}: ${Math.round(item.main.temp)}&deg;C</p>`;
        })
        .join("");
}


apiFetch();
getForecast();