"use strict"

// Homework 6

// // #1

// function sayHello (name) {
//    return `Привіт ${name}`
// }

// sayHello('Kik')
// console.log(sayHello('Kik'));




// // #2

// function arrNumbers(digit) {
//    return [digit - 1, digit, digit + 1]

// }
// console.log(arrNumbers(10));


// // #3

// function getMathResult (numF, numS) {
//    if (typeof(numS) !== 'number' || numS <= 0 ) {
//       console.log(numF);
//       return numF;
//    }   

//    let str = "";

//    for (i=1; i <=numS; i++) {
//       if(i === numS) {
//          str += `${numF * i}`;

//       } else {
//          str += `${numF * i}---`;
//       }
//    }

//    return str
// }

// console.log(getMathResult(10, 5));



















// // lesson 26

// const usdCurrs = 28;
// const discount = 0.9;





// function convert (amount, currs) {
//    return currs * amount;
// }

// function promotion(result) {
//    console.log(result * discount);  
// }

// const res = convert(500, usdCurrs);


// promotion(res);

// function test () {
//    for (let i = 0; i < 5; i++ ) {
//       console.log(i);
//       if(i === 3) return

//    };
//    console.log("done");
// }
// test();


// function doNothing (){};
// console.log(doNothing() === undefined);










// // lesson 25


// let num = 20;

// function showFirstMessage(text) {
//    console.log(text);
//    num = 10;

// }

// showFirstMessage("Hi man");
// console.log(num);

// // function calc(a, b) {
// //    return (a+b);
// // }

// // console.log(calc(4 ,3));
// // console.log(calc(5, 5));


// function ret() {
//    let num = 50;
//    return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//    console.log("woo woo woo");
// };

// logger();

// const calc = (a, b) => { return a + b};








// // Lesson 24
// const numberOfFilms = prompt("Скільки фільмів ти переглянув?", "");

// const personalMoviDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// for (let i = 0; i < 2; i++) {
//    const a = prompt("Один з останніх фільмів який ти переглянув?", ""),
//          b = prompt("Оціни цей фільм від 0.1 до 10?", "");

//    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMoviDB.movies[a]=b;
//       console.log("done");

//    } else {
//       console.log("user Lopux");
//       i--;
//    }
   

// };

// if (personalMoviDB.count < 10) {
//    console.log("Omg мало");
// } else if (personalMoviDB.count >=10 && personalMoviDB.count < 30) {
//    console.log("oMG THIS NORMAS");
// } else if (personalMoviDB.count >=30) {
//    console.log("Omg Monster");
// } else {
//    console.log("WTF MAN");
// }



// console.log(personalMoviDB);