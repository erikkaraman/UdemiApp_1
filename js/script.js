'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ти глянув?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ти глянув?', '');
    };
};

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('один з останніх переглянутих фільмів?', '').trim();
        const b = prompt('яку оцінку даси йому?', '');
    
        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        };
    };
}

rememberMyFilms();

function detectPersonalLevel() {
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
};

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    };
};

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш ${i}-й улюблений жанр`);
        personalMovieDB.genres[i - 1] = genre;
    };
};

writeYourGenres();