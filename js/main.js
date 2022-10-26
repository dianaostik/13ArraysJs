
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
    } else if (a > 7 ){
        sum2++;
    }

}
  console.log(" Trumpesni, negu 5 simboliai:   " + sum1);
  console.log(" Ilgesni, negu 7 simboliai:     " + sum2);

  