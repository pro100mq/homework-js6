const maxNumber = 10;
let i = 1;
while (i <= maxNumber) {
    console.log(i);
    i++;
}

const upperLimit = 20;
for (let j = 2; j <= upperLimit; j++) {
    if (j % 2 !== 0) continue;
    console.log(j);
}

const number = 7;
for (let a = 1; a <= 10; a++) {
    console.log(`${number} x ${a} = ${number * a}`);
}

const number1 = [1, 2, 3, 4, 5];
let index = 0;
while (index < number1.length) {
    console.log(number1[index]);
    index++;
}

const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of number2) {
    if (num === 7) break;
    console.log(num);
}

const n = 8; 
for (let m = 1; m < 20; m++) {
    if (m >= n) break;
    console.log(m);
}

let p = 1;
while (p <= 20) {
    if (p % 3 === 0) {
        p++;
        continue;
    }
    console.log(p);
    p++;
}
