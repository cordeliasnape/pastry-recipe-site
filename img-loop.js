function getRating() {
  let rating = prompt("On  scale of 1-5, how much do you LOVE pastry?", "5");

  if ((rating <= 5) & (rating >= 0)) {
    for (let i = 0; i < rating; i++) {
      document.write("<img id='rating' src='pastry1.png'/>");
    }
  } else {
    alert("uhhh.... try again");
    getRating();
  }
}
