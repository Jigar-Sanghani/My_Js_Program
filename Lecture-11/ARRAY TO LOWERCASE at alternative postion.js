let a = ["RED", "AND", "WHITE"]

for (i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
        console.log(a[i]);
    }
    else {
        console.log(a[i].toLowerCase());
    }
}