
// Lengvesni
console.log("**** Lengvesni *****");

//1 uzd
console.log("------ 1 uzduotis ---------");

let word = "labas";
for (let i = 1; i < 11; i++) {
    console.log(i + " " + word);
}

//2 uzd
console.log("------ 2 uzduotis ---------");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//3 uzd
console.log("------ 3 uzduotis ---------");

let words = ["Astras", "Rožė", "Alyva", "Alavijas", "Akacija", "Aguona", "Dilgėlė", "Dobilas", "Kalendra", "Magnolija"];
console.log(words);

//4 uzd
console.log("------ 4 uzduotis ---------");

for (let i = 0; i < 10; i++) {
    console.log(words[i]);
}

//5 uzd
console.log("------ 5 uzduotis ---------");

for (let i = words.length - 1; i >= 0; i--) {
    console.log(words[i]);
}

//6 uzd
console.log("------ 6 uzduotis ---------");

for (let i = 10; i <= 50; i += 2) {
    console.log(i);
}

//7 uzd
console.log("------ 7 uzduotis ---------");

let tuscia = "";
for (let i = 10; i <= 50; i += 2) {
    if (i === 10 || i === 20 || i === 30 || i === 40 || i === 50) { continue; }
    console.log(tuscia + i + "  ");
}

//8 uzd
console.log("------ 8 uzduotis ---------");

sum = 0;
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) { continue; }
    sum++;
}
console.log(sum + "  ");

// 7/3 2.3333
// 7%3 1
// 7 -3 =4; 4-3 = 1;

// 12%5 = 2;
// 12 - 5 = 7; 7-5=2; 

// let num = 6;

// num % 2 == 0;
// num % 2 != 0;

//9 uzd
console.log("------ 9 uzduotis ---------");

let sum1 = 0;
let sum2 = 0;
let a = 0;
console.log(words);
for (let i = 0; i < words.length; i++) {

    a = words[i].length;
    if (a < 5) {
        sum1++;
    } else if (a > 7) {
        sum2++;
    }

}
console.log(" Trumpesni, negu 5 simboliai:   " + sum1);
console.log(" Ilgesni, negu 7 simboliai:     " + sum2);

// Sunkesni
console.log("**** Sunkesni *****");





//1 uzd  
console.log("------ 1 uzduotis ---------");


let summa = 0;
let text = "";
for (let i = 0; i < 300; i++) {
    let eile = Math.round(Math.random() * 300);
    if (eile > 150) {
        summa++;
    }
    if (eile > 275) {
        text += "[" + eile + "] ";
    } else {
        text += eile + " ";
    }
}
console.log(text);
console.log("Didesni, nei 150 = " + summa);





//2 uzd   
console.log("------ 2 uzduotis ---------");

let text2 = "";
for (let i = 77; i < 3001; i += 77) {
    text2 += i + ",";
}
console.log(text2.slice(0, -1));





//3 uzd  
console.log("------ 3 uzduotis ---------");

for (let a = 0; a < 10; a++) {
    let arr = "";
    for (let b = 0; b < 10; b++) {
        arr += " * ";
    }
    console.log(arr);
}

// 4 uzd   
// console.log("------ 4 uzduotis ---------");

// let elementas = document.getElementById("kvadratas");
// eilute = "";
// for (let s = 0; s < 10; s++) {
//     eilute += "<p>";
//     for (let i = 0; i < 10; i++) {
//         eilute += " * ";
//     }
//     eilute += "</p>";
// }
// elementas.innerHTML = eilute;



//5 uzd   
console.log("------ 5 uzduotis ---------");


// // // Iskritus Herbui sustoja
console.log("  Iskritus herbui  ");
let moneta = Math.round(Math.random() * 1);
while (moneta === 0) {
    if (moneta === 0) {
        console.log("H");
    } else {
        console.log("S");
    }
    break;
}

// 3 kartus iskritus herbui
console.log("  3 kartus iskritus herbui   ");
let count = 0;
while (true) {
    let coin = Math.round(Math.random());
    if (coin === 0) {
        count++;
        console.log("H");
    } else {
        console.log("S");
    }

    if (count == 3) {
        break;
    }
}


// // // 3 kartus IS EILES ikritus herbui
console.log("  3 kartus is eiles iskritus herbui   ");
let count2 = 0;
while (true) {
    let coin = Math.round(Math.random());
    if (coin === 0) {
        count2++;
        console.log("H");

    } else {
        console.log("S");
        break;
    }
    if (count2 == 3) {
        break;
    }
}

//  6 uzd   
console.log("------ 6 uzduotis ---------");

let namePetras = 0;
let nameKazys = 0;

while (true) {
    let petras = Math.round(10 + Math.random() * 10);
    let kazys = Math.round(5 + Math.random() * 20);
    namePetras += petras;
    nameKazys += kazys; 

    if (namePetras >= 222 || nameKazys >= 222){
        break;
    }
    }

 console.log("Petras = " + namePetras);
 console.log("Kazys = " + nameKazys);

 if (namePetras > nameKazys) {
    console.log("Partija laimejo: Petras");
 } else {
    console.log("Partija laimejo: Kazys");
 }


 //  8 uzd   
console.log("------ 8 uzduotis ---------");

