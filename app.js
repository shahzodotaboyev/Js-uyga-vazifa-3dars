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



// If 14 
// let A = parseFloat(prompt("A ga haqiqiy son kiriting:"));
// let B = parseFloat(prompt("B ga haqiqiy son kiriting:"));
// let C = parseFloat(prompt("C ga haqiqiy son kiriting:"));

// if ((A <= B && B <= C) || (A >= B && B >= C)) {
//     A *= 2;
//     B *= 2;
//     C *= 2;
// } else {
//     A = -A;
//     B = -B;
//     C = -C;
// }

// console.log("A:", A);
// console.log("B:", B);
// console.log("C:", C);


// If 15
// let num1 = Number(prompt("Birinchi sonni kiriting:"));
// let num2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let num3 = Number(prompt("Uchinchi sonni kiriting:"));
// let num4 = Number(prompt("To'rtinchi sonni kiriting:"));

// let uniqueIndex;

// if (num1 === num2 && num1 === num3) {
//     uniqueIndex = 4;
// } else if (num1 === num2 && num1 === num4) {
//     uniqueIndex = 3;
// } else if (num1 === num3 && num1 === num4) {
//     uniqueIndex = 2;
// } else if (num2 === num3 && num2 === num4) {
//     uniqueIndex = 1;
// } else {
//     uniqueIndex = null;
// }

// if (uniqueIndex) {
//     console.log("Uchinchi teng bo'lmagan son tartib raqami:", uniqueIndex);
// } else {
//     console.log("Uchta son teng emas!");
// }



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
// let year = Number(prompt("Yilni kiriting:"));

// let daysInYear;

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     daysInYear = 366; 
// } else {
//     daysInYear = 365;
// }

// console.log(year + " yilida " + daysInYear + " kun bor.");


// let number = Number(prompt("1 dan 999 gacha bo'lgan sonni kiriting:"));

// if (number < 1 || number > 999) {
//     console.log("Iltimos, 1 dan 999 gacha bo'lgan son kiriting.");
// } else {
//     if (number >= 10 && number < 100) {
//         if (number % 2 === 0) {
//             console.log(number + " - ikki xonali juft son.");
//         } else {
//             console.log(number + " - ikki xonali toq son.");
//         }
//     } else if (number >= 100 && number < 1000) {
//         if (number % 2 === 0) {
//             console.log(number + " - uch xonali juft son.");
//         } else {
//             console.log(number + " - uch xonali toq son.");
//         }
//     } else {
//         console.log(number + " - bitta xonali son.");
//     }
// }


// ----------------------------------------------------------------



// case 1
// let k = Number(prompt("Bahoni kiriting"));

// switch (k) {
//     case 1:
//         console.log("Yomon");
//         break;
//     case 2:
//         console.log("Qoniqarsiz");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;
//     case 4:
//         console.log("Yaxshi");
//         break;
//     case 5:
//         console.log("A'lo");
//         break;
//     default:
//         console.log("Xato");
// }




// case 2

// let kun = Number(prompt("Oy ni kiriting: "));
// switch (kun) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//         break;
//     case 9:
//     case 10:
//     case 11:
// console.log("Kuz");
// break;
// }



// case 3
// let oy = Number(prompt("oyni kiriting: "));
// switch (oy) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 9:
//     case 11:
//         console.log("Bu oyda 31 kun bor: ");
//         break;
//     case 4:
//     case 6:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Bu oyda 30 kun bor: ");
//         break;
//     case 2:
//         console.log("Bu oyda 28 kun bor: ");
//         break;
//     default :
//     console.log("Bunday oy yo'q: ");
// }


// case 4
// let turi = Number(prompt("Uzunlik birligini tanlang (1 - Desimetr, 2 - Kilometr, 3 - Metr, 4 - Millimetr, 5 - Santimetr):"));
// let uzunlik = Number(prompt("Kesma uzunligini kiriting:"));

// let metr;
// switch (turi) {
//     case 1:
//         metr = uzunlik / 10; 
//         break;
//     case 2:
//         metr = uzunlik * 1000; 
//         break;
//     case 3:
//         metr = uzunlik; 
//         break;
//     case 4:
//         metr = uzunlik / 1000; 
//         break;
//     case 5:
//         metr = uzunlik / 100; 
//         break;
//     default:
//         console.log("Xato: 1 dan 5 gacha son kiriting.");
//         break;
// }

// if (metr !== undefined) {
//     console.log("Bu metrda: " + metr);
// }



// Case 5
// let turi = Number(prompt("Og'irlik birligini tanlang (1 - Kilogramm, 2 - Milligramm, 3 - Gramm, 4 - Tonna, 5 - Sentner):"));
// let qiymat = Number(prompt("Og'irlik qiymatini kiriting:"));

// let kilogram;

// switch (turi) {
//     case 1: 
//         kilogram = qiymat; 
//         break;
//     case 2: 
//         kilogram = qiymat / 1000000; 
//         break;
//     case 3: 
//         kilogram = qiymat / 1000; 
//         break;
//     case 4: 
//         kilogram = qiymat * 1000; 
//         break;
//     case 5: 
//         kilogram = qiymat * 100; 
//         break;
//     default:
//         console.log("Xato: 1 dan 5 gacha son kiriting.");
//         break;
// }

// if (kilogram !== undefined) {
//     console.log("Og'irlik kilogrammda: " + kilogram + " kg");
// }


// Case 6 (buni chatgptidan oldim)
// let D = Number(prompt("Kun (D) ni kiriting (1-31):"));
// let M = Number(prompt("Oy (M) ni kiriting (1-12):"));

// const kunlar = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

// if (M < 1 || M > 12) {
//     console.log("Xato: Oy 1 dan 12 gacha bo'lishi kerak.");
// } else if (D < 1 || D > kunlar[M]) {
//     console.log("Xato: Berilgan oy uchun kun 1 dan " + kunlar[M] + " gacha bo'lishi kerak.");
// } else {
//     const oylar = [
//         "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
//         "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
//     ];

//     console.log(`Berilgan sana: ${D} ${oylar[M - 1]} (Kabisa bo'lmagan yil)`);
// }


// case  7

// let D = Number(prompt("Kun (D) ni kiriting (1-31):"));
// let M = Number(prompt("Oy (M) ni kiriting (1-12):"));

// const kunlar = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
// if (M < 1 || M > 12) {
//     console.log("Xato: Oy 1 dan 12 gacha bo'lishi kerak.");
// } else if (D < 1 || D > kunlar[M]) {
//     console.log("Xato: Berilgan oy uchun kun 1 dan " + kunlar[M] + " gacha bo'lishi kerak.");
// } else {
//     D++; 
//     if (D > kunlar[M]) { 
//         D = 1; 
//         M++; 
//         if (M > 12) { 
//             M = 1; 
//         }
//     }

//     const oylar = [
//         "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
//         "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
//     ];

//     console.log(`Berilgan sanadan keyingi sana: ${D} ${oylar[M - 1]} `);
// }


// case 8 (buni chatgptdan oldim)
// let Y = prompt("Robotning yo'nalishini kiriting (s - shimol, j - janub, q - sharq, g - g'arb):");
// let K = prompt("Kamanda kiriting (0 - harakatni davom ettirish, 1 - chapga burilish, 2 - o'ngga burilish):");

// const yonalishlar = ["s", "q", "j", "g"]; 
// let index = yonalishlar.indexOf(Y); 

// if (K === "0") {
//     console.log(`Robotning holati: ${yonalishlar[index]} (harakatni davom ettiradi)`);
// } else if (K === "1") {
//     index = (index + 3) % 4;
//     console.log(`Robotning holati: ${yonalishlar[index]} (chapga burildi)`);
// } else if (K === "2") {
//     index = (index + 1) % 4;
//     console.log(`Robotning holati: ${yonalishlar[index]} (o'ngga burildi)`);
// } else {
//     console.log("Xato: Kamanda 0, 1 yoki 2 bo'lishi kerak.");
// }


