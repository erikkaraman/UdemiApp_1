const numberOfFilms = +prompt('Скільки фільмів ти глянув?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один з останніх переглянутих фільмів?', ''),
      b = prompt('яку оцінку даси йому?', ''),
      c = prompt('останній переглянутий фільм', ''),
      d = prompt('один з останніх переглянутих фільмів?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);