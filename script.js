"use strict"


// for(let i=0; i<3; i++) {
//    console.log(i);
//    for(let j=0; j<3; j++) {
//       console.log(j);
      
//    }
// }


// let result = "";
// const length = 7;


// for (let i = 1; i < length; i++) {

//    for (let j = 0; j < i; j++) {
//       result += "*";

//    }



//    result += "\n";
// }
// console.log(result);


// first :for(let i=0; i<3; i++) {
//    console.log(`First level: ${i}`);
//    for(let j=0; j<3; j++) {
//       console.log(`Second level: ${j}`);
//       for(let k=0; k<3; k++) {
//          if ( k===2 ) break first;
//          console.log(`Third level: ${k}`);

         
//       }
      
//    }
// }

// Homework

// Я 1

// const length = 11;

// for (let i=0; i<length; i++) {
//    if (i>4 && i<length) {
//       console.log(i);
//    }
// }

// // Бодя 1

// let n = 5;
//     while (n < 11) {
//         console.log(n);
//         n++;
//     }
    



//    //  Я 2



//    for (let i=20; i > 10; i--) {
//       if (i==13) {
//          break;
//       }
//       console.log(i);
//    }


// // Бодя

// for (let i = 20; i > 10; i--) {
//    if (i == 13) {
//          break;
//    }
//    console.log(i);
// }


// // Я

// const limit = 11;
// for (i=0; i<limit; i++ ) {
//    if (i % 2 < 1) {
//       console.log(i);
//    }
// }

// // Бодя
// for (let i = 2; i <= 10; i = i + 2) {
//    console.log(i);
// }

// // Я
// let i = 2;

// while (i <= 16) {
//    i++;
//    if (i % 2 === 0){
//       continue
//    }
//    console.log(i); 
// }


// for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//        continue;
//    } else {
//        console.log(i);
//    }
// }

// My

// let arr = [];
// let arrIndex = 0;
// for (let i=5; i<11; i++) {
//       arr[arrIndex] = i;
//       arrIndex++;
//    }
// console.log(arr);


// Homework with *

// const arr = [1, 2, 7, 8, 9, 11, 3, 12,];

// const result = [];

// for (let i = 0; i <arr.length; i++) {
//    result[i]=arr[i];
   

// };
// console.log(result);


// // #2

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// let less = 4;

// for (let i = 0; i<data.length; i++ ) {
//    if (typeof(data[i]) === 'string') {
//       data[i]= `${data[i]} - done`;
//    } else {
//       data[i] = data[i] * 2;
//    }
// };
// console.log(data);

// // #3

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i<=data.length; i++) {

//    result[i-1] = data[data.length-i];


// }
// console.log(result);


// Pyramid not me


// const lines = 6;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)