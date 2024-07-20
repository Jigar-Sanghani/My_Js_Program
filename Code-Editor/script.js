let output = document.querySelector("#output");
let allInput=document.querySelectorAll(".leftPart textarea")
console.log(allInput);

let htmlCode,cssCode,jsCode='';
allInput.forEach((ele,index)=>{
    ele.addEventListener("keyup",()=>{
        if(index==0){
            htmlCode=ele.value;
        }
        if(index==1){
            cssCode=ele.value;
        }
        if(index==2){
            jsCode=ele.value;
        }
        output.contentDocument.body.innerHTML=htmlCode;
        output.contentDocument.head.innerHTML=`<style>${cssCode}</style>`;
        output.contentWindow.eval(jsCode)
    })
})

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})
