function func(){
  var x = Math.floor((Math.random() * 6) + 1);
  var y = Math.floor((Math.random() * 6) + 1);

  title = "";

  if (x == y)
    title = "Draw";
  else if (x > y)
    title = "🚩Player 1 wins";
  else
    title = "Player 2 wins🚩";

  document.querySelector(".img1").setAttribute("src", "images\\dice"+x+".png");
  document.querySelector(".img2").setAttribute("src", "images\\dice"+y+".png");

  document.querySelector("h1").textContent = title;
}
