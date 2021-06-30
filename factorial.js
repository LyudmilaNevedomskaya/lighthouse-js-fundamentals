// A factorial is calculated by multiplying a number by all the numbers below it. 
// For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

let solution = 1;

for (let i = 1; i <= 12; i++) {
    solution *= i;
}

console.log(solution);