let button=document.getElementById("ingBtn1");
let text=document.getElementById("ingTxt1");
button.addEventListener("click", () => {
    if (toggle) {
        text.style.display="none"
        text.style.display="block"
    } else {
        text.style.display
    }
    toggle=!toggle;
})