let a=[2,6,5,8,0,29]
let n = a.length;
let sum=0;

for(let i=0;i<n;i++)
{
    if(sum<a[i]){
        sum=a[i];
    }
}

console.log(sum);