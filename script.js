"use strict"

const numberOfFilms = prompt("Скільки фільмів ти переглянув?", ""),
      lastFilmName1 = prompt("Один з останніх фільмів який ти переглянув?", ""),
      lastFilmRating1 = prompt("Оціни цей фільм від 0.1 до 10?", ""),

       lastFilmName2 = prompt("Один з останніх фільмів який ти переглянув?", ""),
      lastFilmRating2 = prompt("Оціни цей фільм від 0.1 до 10?", "");

const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

personalMoviDB.movies[lastFilmName1]=lastFilmRating1;
personalMoviDB.movies[lastFilmName2]=lastFilmRating2;


console.log(personalMoviDB);