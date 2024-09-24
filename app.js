// If 1
// let son = prompt('Butun son kiriting:');
// son = parseInt(son);
// if (son > 0){
//     son++;
// }
// console.log("Hosil bo'lgan son: "  + son);


// If 2
// let son = prompt('Butun son kiriting: ');
// son = parseInt(son);
// if (son > 0) {
//     console.log(son + 1);
// }  else if (son < 0) {
//     console.log(son - 2);
// }else {
//     console.log(son + 10)
// }

// If 3
// let son1 = prompt('1chi sonni kiriting: ');
// let son2 = prompt('2chi sonni  kiriting: ');
// let son3 = prompt('3ch  sonni kiriting: ');

// let bosh = 0;
// son1 = parseInt(son1);

// son2 = parseInt(son2);
// son3 = parseInt(son3);


// if (son1 > 0) bosh++;
// if (son2 > 0) bosh++;
// if (son3 > 0) bosh++;
// console.log("Musbat sonlar:" + bosh);

// If 4
// let son1 = prompt('1-sonni kiriting');
// let son2 = prompt('2-sonni kiriting');

// son1 = parseInt(son1);
// son2 = parseInt(son2);

// if ( son1 > son2){
//     console.log("Katta son: " + son1);
// }else if(son1 < son2){
//     console.log("Katta son: " + son2);
// }else{
//     console.log("Ikkala son teng")
// }


// If 5
// let son1 = prompt('1-sonni kiriting');
// let son2 = prompt('2-sonni kiriting');

// son1 = parseInt(son1);
// son2 = parseInt(son2);

// if (son1 < son2){
//     console.log("Kichkina son:  " + son1);
// }else if(son1 > son2){
//     console.log("kichkina son: " + son2);
// }else{
//     console.log("Ikkala son teng");
// }


// If 6

// let son1 = prompt('1-sonni kiriting');
// let son2 = prompt('2-sonni kiriting');

// son1 = parseInt(son1);
// son2 = parseInt(son2);


// if (son1 > son2) {
//     console.log(son1);
//     console.log(son2);

// }else if (son1 < son2) {
//     console.log(son2);
//     console.log(son1);
// }else{
//     console.log("Ikkasiham teng")
//     console.log(son1 )
//     console.log(son2)
// }

// If 7
// let a = prompt('a sonni kiriting');
// let b = prompt('b sonni kiriting');

// a = parseInt(a);
// b = parseInt(b);

// if (a > b) {
//     let c = a;

//     a = b;
//     b = c;
//     console.log("a ning qiymati: " + a);
//     console.log("b ning qiymat: " + b);
// } else if (a < b) {
//     console.log("a ning qiymati: " + a);
//     console.log("b ning qiymati: " + b);
// }else{
//     console.log("Ikkalasiniha qiymati bir")
// }



// If 8
// let a = prompt('a sonni kiriting');
// let b = prompt('b sonni kiriting');

// a = parseInt(a);
// b = parseInt(b);

// if (a != b) {
//     console.log("a ning qimati: " + (a + b));
//     console.log("b ning qimati: " + (a + b));
// } else if (a = b) {
//     a = 0;
//     b = 0;
//     console.log("a ning qimati: " + a);
//     console.log("b ning qimati: " + b);

// }


// If 9 

// let a = prompt('a sonni kiriting');
// let b = prompt('b sonni kiriting');
// switch (true) {
//     case a === b:
//         a = 0;
//         b = 0;
//         break;
//     default:
//         if (a > b) {
//             b = a;
//         } else {
//             b = a;
//         }
// }
// console.log("a: " + a);
// console.log("b: " + b);


// If 10

// let a = prompt('a sonni kiriting');
// let b = prompt('b sonni kiriting');
// let c = prompt('c sonni kiriting');

// let min;
// if (a < b && a < c) {
//     min = a;
// }else if(b <a && b < c){
//     min = b;
// }else{
//     min = c;
// }
// console.log("Kichkina son: " +min);



// If 11
// let a = Number(prompt("a ga qiymat bering"));
// let b = Number(prompt("b ga qiymat bering"));
// let c = Number(prompt("c ga qiymat bering"));

// let middle;

// switch (true) {
//     case (a > b && a < c) || (a > c && a < b):
//         middle = a;
//         break;
//     case (b > a && b < c) || (b > c && b < a):
//         middle = b;
//         break;
//     case (c > a && c < b) || (c > b && c < a):
//         middle = c;
//         break;
// }

// console.log("O'rtadagi son:", middle);


// If 12
// let a = Number(prompt("a ga qiymat bering"));
// let b = Number(prompt("b ga qiymat bering"));
// let c = Number(prompt("c ga qiymat bering"));

// let maxSum;
// let num1, num2;

// switch (true) {
//   case (a + b >= a + c && a + b >= b + c):
//     maxSum = a + b;
//     num1 = a;
//     num2 = b;
//     break;
//   case (a + c >= a + b && a + c >= b + c):
//     maxSum = a + c;
//     num1 = a;
//     num2 = c;
//     break;
//   case (b + c >= a + b && b + c >= a + c):
//     maxSum = b + c;
//     num1 = b;
//     num2 = c;
//     break;
// }

// console.log("Eng katta yig'indi", maxSum, " bo'lgan sonlar:", num1, "va", num2);


// If 13
// let a = Number(prompt("a ga qiymat bering"));
// let b = Number(prompt("b ga qiymat bering"));
// let c = Number(prompt("c ga qiymat bering"));

// a *= 2;
// b *= 2;
// c *= 2;

// let maxSum;
// let num1, num2;

// switch (true) {
//   case (a + b >= a + c && a + b >= b + c):
//     maxSum = a + b;
//     num1 = a;
//     num2 = b;
//     break;
//   case (a + c >= a + b && a + c >= b + c):
//     maxSum = a + c;
//     num1 = a;
//     num2 = c;
//     break;
//   case (b + c >= a + b && b + c >= a + c):
//     maxSum = b + c;
//     num1 = b;
//     num2 = c;
//     break;
// }

// console.log("Eng katta yig'indi", maxSum, " bo'lgan sonlar:", num1, "va", num2);




// If 16
// function funksiya() {
//     let x = parseFloat(prompt("X qiymatini kiriting:"));

//     if (x <= 0) {
//         return -x;
//     }
//     if (x > 0 && x < 2) {
//         return x * x;
//     }
//     if (x >= 2) {
//         return 4;
//     }
// }

// console.log("Natija: " + funksiya());



// If 17
