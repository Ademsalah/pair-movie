function generateId(n) {
  return Math.floor(Math.random() * (n + 1));
}
/* var value = 0;
function generate() {
  value += 1;

  return value;
} */

var moviesList = JSON.parse(localStorage.getItem("movie")) || [];
$(".add").click(function () {
  var name = $("#inp1").val();
  var img = $("#inp3").val();
  var description = $("#inp2").val();
  var movie = {
    name: "",
    Image: "",
    des: "",
  };
  movie.name = name;
  movie.Image = img;
  movie.des = description;
  movie.id = generateId(4);

  moviesList.push(movie);
  localStorage.setItem("movie", JSON.stringify(moviesList));
});
let movie = JSON.parse(localStorage.getItem("movie"));
console.log(movie);

var film = movie.map(
  (movie) =>
    ` <div class="movie" >
            <img src="${movie.Image}" alt="" />
            <h3>${movie.name}</h3>
          <p>${movie.des}</p>
         <a href="formulaire.html"> <i class="fa fa-edit"></i></a>
          <i class="fa fa-remove"></i>
        </div>`
);

console.log(film);
$(".container").append(film);
console.log(localStorage);

$("#btn1").click(function () {
  $("#movie1").remove();
});
$("#btn2").click(function () {
  $("#movie2").remove();
});
$("#btn3").click(function () {
  $("#movie3").remove();
});
$("#btn4").click(function () {
  $("#movie4").remove();
});
$("#btn5").click(function () {
  $("#movie5").remove();
});
$("#btn6").click(function () {
  $("#movie6").remove();
});
$("#btn7").click(function () {
  $("#movie7").remove();
});
function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = "none";
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
