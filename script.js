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