let n = process.argv;
let i, sum = 0;

for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}

console.log(sum);