function menu() {
  var navbar = document.getElementById("navbargroup");
  var container = document.getElementById("maincontainer");
  var margin = "mt-52";

  if (navbar.classList.contains("invisible")) {
    navbar.classList.remove("invisible");
    navbar.classList.add("visible");
    container.classList.add(margin);
  } else {
    navbar.classList.remove("visible");
    navbar.classList.add("invisible");
    container.classList.remove(margin);
  }
}
var jumbotron = document.getElementById("jumbotronimage");

var jumbotronname = [
  "img/jumbotron.jpg",
  "img/jumbotron1.jpg",
  "img/jumbotron2.jpg",
];

function gantigambar() {
  array.forEach((jumbotronname) => {
    document[jumbotron].src = jumbotronname;
    console.log("berhasil");
  });
}
