"use strict";
const apiKey = '91c1a05e';
const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=91c1a05e';
// const postApiUrl = 'http://img.omdbapi.com/?apikey=91c1a05e&';
const main = document.querySelector('main');
const form = document.querySelector('#form');
const footer = document.querySelector('footer');

let userTitle = document.getElementById('title');
let searchBtn = document.getElementById('search-by-title-btn');
let resetBtn = document.getElementById('search-by-title-reset');

searchBtn.addEventListener('click', searchSubmit);
resetBtn.addEventListener('click', searchReset);

function searchReset() {
// console.log('reset');
  main.innerHTML = ``;
}

function searchSubmit(event) {
  event.preventDefault();
  let title = userTitle.value;
  function getMovies() {
    fetch('https://www.omdbapi.com/?s=' + title + '&apikey=91c1a05e')
      .then((resp) => {
        // console.log(resp.json());
        return resp.json();
      })
      .then((respData) => {
        console.log(respData.Search);
        let movies = respData.Search;

        movies.forEach(function (movie) {
          const movieEl = document.createElement('div');
          movieEl.classList.add('movie');
          movieEl.innerHTML = `
          <img src="${movie.Poster}" alt="${movie.Title}">
          <div class="movie-info">
          <h3>${movie.Title}</h3>
          <span>${movie.Year}</span>
          
          </div>
          <button type="button" class="btn btn-primary btn-sm movie-btn about-btn">About</button>
          `;
          main.appendChild(movieEl);
        });

        // let aboutBtn = document.getElementsByClassName('about-btn');
        // aboutBtn.addEventListener('click', getMovieInfo);
        
        // function getMovieInfo(event) {
        //   event.preventDefault();
        //   console.log("info");
        //   console.log(respData.Search);
        //   movies.forEach(function (movie) {
            
        //   const movieInfo = document.createElement('div');
        //   movieInfo.classList.add('about-info');
        //   movieInfo.innerHTML = `
        //   <img src="${movie.Poster}" alt="${respData.Search.Title}">
        //   <div>
        //   <p>${movie.Title}</p>
        //   <p>${movie.Year}</p>
        //   <p>${movie.Type}</p>
        //   <p>${movie.imdbID}</p>
        //   </div>
        //   `;
        //         footer.appendChild(movieInfo);
        //       }); 
        // }
      });
  
  }
  getMovies();

}
