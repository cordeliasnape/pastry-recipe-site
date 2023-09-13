let username = prompt("What's your name?");

console.log(username);

let daytime = prompt("What time is it? (For example - 'morning', 'afternoon' or 'evening')");

console.log(daytime);

let message = "Good " + daytime + ", " + username +".";

console.log (message);

document.write(message);

///

let button=document.getElementById("ingBtn1");
let text=document.getElementById("ingTxt1");
let toggle=true;
button.addEventListener("click", () => {
    if (toggle) {
        text.style.display="none"
    } else {
        text.style.display="block"
    }
    toggle=!toggle;
})