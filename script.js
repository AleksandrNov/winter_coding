'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов?', ''),
          b = prompt('На сколько вы его оцените?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('Done'); 
    } else {
        console.log('Error');
        i--;
    }      

    personalMovieDB.movies[a] = b;
}

if(personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
}else if(personalMovieDB >= 30) {
    console.log('Вы киноман');
}else {
    console.log('Произошла ошибка');
}



// function showMyDB() {
//     if {
//         personalMovieDB.privat == false
//     }
// };

// function writeYourGenres() {
//     c = prompt('Ваш любимый жанр под номером ${номер по порядку}', '')
// }



console.log(personalMovieDB);

// let num = 50;
// for (let i = 1; i <= 10; i++) {
//     console.log(num);
//     num++;
// }


// let c = 4
// function addX(x) {
//   return function(n) {
//      return n + x
//   }
// }
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)


// let c = 4
// const addX = x => n => n + x
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)
