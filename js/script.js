const numberOfFilms = +prompt('Скільки фільмів ти глянув?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('один з останніх переглянутих фільмів?', ''),
//       b = prompt('яку оцінку даси йому?', '');

// personalMovieDB.movies[a] = b;

for (let i = 0; i < 2; i++) {
    const a = prompt('один з останніх переглянутих фільмів?', '');
    const b = prompt('яку оцінку даси йому?', '');

    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Переглянуто замало фільмів');
    stop;
} else if (personalMovieDB.count < 30) {
    console.log('Ви класний глядач');
    stop;
} else if (personalMovieDB.count > 30) {
    console.log('Ви справжній кіноман');
    stop;
} else {
    console.log('Error');
};

console.log(personalMovieDB);