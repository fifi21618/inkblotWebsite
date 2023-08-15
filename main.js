
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabname, event) {
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("tab-content");
}

