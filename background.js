let time = prompt("What hour is it? (0-23 - For example: 4pm is 16))");

// let liar = ("Liar, liar, pants on fire");

console.log(time)

function changeBgColor(color) {
    document.body.style.backgroundColor = color;
if (time <= 11) {
    document.body.style.backgroundColor = "#e0ac8d";
} else if (time <= 16) { 
    document.body.style.backgroundColor = "#d69376";
} else if (time <= 23) {
    document.body.style.backgroundColor = "#a15e3a";
} else {
    document.body.style.backgroundColor = "#a1413a";
}

changeBgColor();

function displayInfo () {
    alert(liar);
}
}
    
