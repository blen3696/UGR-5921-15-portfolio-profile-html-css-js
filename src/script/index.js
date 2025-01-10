//nav section menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const jobTitles = ["Software Engineer", "Web Developer"];
let currentTitle = 0;
let currentChar = 0;
const typingSpeed = 150; // Speed of typing each character
const erasingSpeed = 100; // Speed of erasing each character
const delayBetweenTitles = 1500; // Delay before switching to the next title

const jobTitleElement = document.getElementById("job-title");

function typeJobTitle() {
    if (currentChar < jobTitles[currentTitle].length) {
        jobTitleElement.textContent += jobTitles[currentTitle][currentChar];
        currentChar++;
        setTimeout(typeJobTitle, typingSpeed);
    } else {
        setTimeout(eraseJobTitle, delayBetweenTitles);
    }
}

function eraseJobTitle() {
    if (currentChar > 0) {
        jobTitleElement.textContent = jobTitles[currentTitle].substring(0, currentChar - 1);
        currentChar--;
        setTimeout(eraseJobTitle, erasingSpeed);
    } else {
        currentTitle = (currentTitle + 1) % jobTitles.length; // Move to the next title
        setTimeout(typeJobTitle, typingSpeed);
    }
}

// Start the animation
document.addEventListener("DOMContentLoaded", typeJobTitle);


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



    window.onload = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };
    
//remove icons 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


