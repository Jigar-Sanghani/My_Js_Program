let a = "RED AND WHITE"
let sum = 0
let arr= ['a','e','i','o','u']

a = a.toLowerCase()

for (i = 0; i < a.length; i++) {
    if (arr.includes(a[i])) {
        sum++;
    }
}

console.log(sum);   