var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Open the clicked tab and hide the rest
function openTab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-content");
    }

    document.getElementById(tabname).classList.add("active-content");
    document.getElementById(tabname + "-link").classList.add("active-link");
}

let ticking = false;

// Change navbar size and color on scroll
function updateNavbar() {
    const navbar = document.querySelector('nav');
    const scrollPosition = window.scrollY;
    var scaling = 1 - (scrollPosition / (2*window.innerHeight));
    
    // Ensure scaling is within the desired range
    scaling = Math.max(0.5, Math.min(1.0, scaling));
    
    var navbarOpacity = scrollPosition / (1*window.innerHeight);

    if(navbarOpacity > 0.6) {
        // add a white background to each navbar item when they are hovered over
        document.querySelectorAll('nav ul li a').forEach(function(element) {
            element.classList.add('hover');
        });

    }
    
    // Change background color of navbar
    navbar.style.backgroundColor = `rgba(186, 36, 52, ${navbarOpacity})`;
    
    // change logo size
    document.querySelector('nav img').style.width = `${scaling * 100}px`;
    document.querySelector('nav img').style.height = `${scaling * 100}px`;
    
    // change navbar height to the same as the logo
    navbar.style.height = `${scaling * 120}px`;

    document.querySelectorAll('nav ul li a').forEach(function(element) {
        element.style.fontSize = `calc(${12 + scaling * 1}px + ${scaling * 1}vw)`;

    });

    ticking = false;
}

// Add event listener to scroll event
window.addEventListener('scroll', function(e) {
    if(!ticking) {
        window.requestAnimationFrame(function() {
            updateNavbar();
        });
    }
    ticking = true;
});
