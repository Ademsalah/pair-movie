const deleteMovie = (index) => {
  document.getElementById(index).outerHTML = "";
};
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
// const searchParams = new URLSearchParams(window.location.search);
function generateId(n) {
  let id = Number(localStorage.getItem("index")) || 0;
  localStorage.setItem("index", (id += 1));
  return (id += 1);
}

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
  movie.id = generateId();

  moviesList.push(movie);
  localStorage.setItem("movie", JSON.stringify(moviesList));

  let container = document.getElementById("container");
  container.innerHTML = `
    ${container.innerHTML}
    <div class="movie" id='${movie.id}'>
              <img src="${movie.Image}" alt="" />
              <h3>${movie.name}</h3>
            <p>${movie.des}</p>
           <a href="formulaire.html"> <i class="fa fa-edit"></i></a>
            <button onclick="deleteMovie(${movie.id})"><i class="fa fa-remove"></i></button>
          </div>
    `;
});
let movie = JSON.parse(localStorage.getItem("movie"));

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

$(".container").append(film);

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
