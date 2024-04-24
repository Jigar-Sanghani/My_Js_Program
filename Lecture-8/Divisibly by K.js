let num = process.argv;
let k = process.argv;
let i;

for (i = 1; i <= num; i++) {
    if (i % k == 0) {
        console.log(i);
    }
}