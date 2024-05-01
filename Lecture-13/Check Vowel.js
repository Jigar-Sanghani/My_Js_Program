let str = "red"
let vowel = ['a', 'e', 'i', 'o', 'u']
str = str.toLowerCase()

for (i = 0; i < str.length; i++) {
    console.log(vowel.includes(str[i]));
}