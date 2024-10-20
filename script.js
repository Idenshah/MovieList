const body = document.querySelector("body");
const myForm = document.createElement("form");
myForm.id = "form";
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.name = "searchMovie";
searchInput.id = "searchBar";
searchInput.placeholder = "Enter movie name here...";
searchInput.autocomplete = "off";
myForm.append(searchInput);

const moviesList = document.createElement("div");
moviesList.classList.add("container");

const displayMovies = (moviesToDisplay) => {
  moviesList.innerHTML = "";
  moviesToDisplay.forEach((movie) => {
    const filmBox = document.createElement("div");
    filmBox.classList.add("box");
    const movieTitle = movie.title;
    const movieYear = movie.year;
    const movieDescription = movie.description;

    const film = document.createElement("div");
    film.classList.add("film");
    film.textContent = `${movieTitle} - (${movieYear})`;
    const info = document.createElement("div");
    info.classList.add("information");
    filmBox.append(film, info);

    film.addEventListener("click", function () {
      if ( info.textContent === ''){
        info.textContent = movieDescription;
        film.style.color = 'red'
      }
      else{
        info.textContent =''
        film.style.color = "#1f2937";
      }

    });

    moviesList.append(filmBox);
  });
};

displayMovies(movies);

body.append(myForm, moviesList);

myForm.addEventListener("input", function (e) {
  e.preventDefault();
  const searchTerm = myForm.elements.searchMovie.value.toLowerCase();
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.year.toString().includes(searchTerm)
  );
  displayMovies(filteredMovies);
});

//2nd way
// searchInput.addEventListener("input", function (e) {
//   const searchTerm = e.target.value.toLowerCase();
//   const filteredMovies = movies.filter(
//     (movie) =>
//       movie.title.toLowerCase().includes(searchTerm) ||
//       movie.year.toString().includes(searchTerm)
//   );
//   displayMovies(filteredMovies); 
// });
