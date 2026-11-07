// store the selected elements that we are going to use
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// toggle the show class of and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

// toggle the show class of and on
// navBar.addEventListener('click', () => {
//     const isOpen = navBar.classList.toggle('show');
//     navbutton.setAttribute('aria-expanded', isOpen);
//     navBar.classList.toggle('show');
// });



