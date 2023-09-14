let time = prompt("What hour is it?\n(0-23 - For example: 4pm is 16)");

console.log(time)

function changeBgColor() {
    if (time <= 11) {
        document.body.style.backgroundColor = "#e0ac8d";
    } else if (time <= 16) { 
        document.body.style.backgroundColor = "#d69376";
    } else if (time <= 23) {
        document.body.style.backgroundColor = "#a15e3a";
    } else {
        alert("That is not a valid time.\nPlease close the site and reopen it, thank you!\nP.S I know I'm cheating."); // please please hint at me where i'm going wrong lol
        changeBgColor ();
}
}

changeBgColor();
    
// document.body.style.backgroundColor = "#a1413a";