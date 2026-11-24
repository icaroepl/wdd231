const nameInfo = document.querySelector('#name-input')
const lastInfo = document.querySelector('#last-input')
const emailInfo = document.querySelector('#email-input')
const phoneInfo = document.querySelector('#phone-input')
const organizationInfo = document.querySelector('#organization-input')
const descriptionInfo = document.querySelector('#description')
const levelInfo = document.querySelector('#level-select')

const mainForm = document.querySelector(".main-form")
const infoPlace = document.querySelector("#info");

// impede de carregar a pagina, salva e dps muda
if (mainForm != null) {
    mainForm.addEventListener("submit", submitEvent => {
        saveInfo();
        submitEvent.preventDefault();
        changePage();
    });
}

function saveInfo() {
    localStorage.setItem('nameInfo', nameInfo.value);
    localStorage.setItem('lastInfo', lastInfo.value);
    localStorage.setItem('emailInfo', emailInfo.value);
    localStorage.setItem('phoneInfo', phoneInfo.value);
    localStorage.setItem('organizationInfo', organizationInfo.value);
}

function displayInfo() {
    var name = localStorage.getItem('nameInfo');
    var last = localStorage.getItem('lastInfo');
    var email = localStorage.getItem('emailInfo');
    var phone = localStorage.getItem('phoneInfo');
    var organization = localStorage.getItem('organizationInfo');
    infoPlace.innerHTML = "Full Name: " + name + " " + last + "<br><br>" + "Email: " + email + "<br><br>" + "Phone: " + phone + "<br><br>" + "Organization Name: " + organization;
}

function changePage() {
    window.location.href = "thankyou.html"
}

if (infoPlace != null) {
    displayInfo();
}

// button for testing
// const displayButton = document.querySelector("#display-button");
// if (displayButton != null) {
//     displayButton.addEventListener("click", () => {
//         console.log(infoPlace.innerHTML);
//         displayInfo();
//     });
// }