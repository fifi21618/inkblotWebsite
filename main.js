
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabname) {
    for ( tablink of tablinks) {
        tablinks.classList.remove("active-link");
    }
    for ( tabcontent of tabcontents) {
        tabcontents.classList.remove("active-tab");
    }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("tab-content");
}

