count = localStorage.getItem("count") || 0;
document.querySelector("#like").innerHTML = `${count} Likes`;
const handleLikes = () =>{
    count++;
    document.querySelector("#like").innerHTML = `${count} Likes`;
    let icon = document.querySelector(".like")
    icon.style.color = "red"
    localStorage.setItem("count", count)
}

countComment = localStorage.getItem("countComent") || 0;
document.querySelector("#comment").innerHTML = `View All ${countComment} Comments`;
const handleComments = () =>{
    countComment++;
    document.querySelector("#comment").innerHTML = `View All ${countComment} Comments`;
    localStorage.setItem("countComent", countComment)
}

let countShare =  localStorage.getItem("countShare") || 0;
document.querySelector("#share").innerHTML = `${countShare} Shares`;
const handleShare = () =>{
    countShare++;
    document.querySelector("#share").innerHTML = `${countShare} Shares`;
    localStorage.setItem("countShare", countShare)
}

countSave = sessionStorage.getItem("countSave") || 0;
const handleSave = () =>{
    countSave++;
    alert(countSave+" Times You Saved This Post")
    sessionStorage.setItem("countSave", countSave)
}

document.querySelector(".like").addEventListener("click",handleLikes)
document.querySelector(".comm").addEventListener("click",handleComments)
document.querySelector(".share").addEventListener("click",handleShare)
document.querySelector(".save").addEventListener("click",handleSave)