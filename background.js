let time = prompt("What hour is it? (0-23 - For example: 4pm is 16))");

console.log(time)

function changeBgColor() {
    if (time <= 11) {
        document.body.style.backgroundColor = "#e0ac8d";
    } else if (time <= 16) { 
        document.body.style.backgroundColor = "#d69376";
    } else if (time <= 23) {
        document.body.style.backgroundColor = "#a15e3a";
    } else {
        alert("That is not a valid time"); //alert currently doesn't close, tried changing to `confirm`
        window.location.reload (true); //attempt at fixing the website
        changeBgColor (); //reruns the function
}
}

changeBgColor();
    
// document.body.style.backgroundColor = "#a1413a";