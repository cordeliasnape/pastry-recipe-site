let time = prompt("What hour is it? (0-23 - For example: 4pm is 16))");

let liar = ("Liar, liar, pants on fire");

function changeBgColor(color) {
    document.header.style.backgroundColor = color;
if (time <= 11) {
    document.header.style.backgroundColor = "#e0ac8d;"
} else if (time <= 16) { 
    document.header.style.backgroundColor = "#d69376;"
} else if (time <= 23) {
    document.header.style.backgroundColor = "#a15e3a;"
} else {
    document.header.style.backgroundColor = "#a1413a;"
}

function displayInfo () {
    alert(liar);
}
}
    
