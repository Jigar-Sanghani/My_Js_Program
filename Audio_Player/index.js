let music_system = [
    {
        audio: "./Audio/Angaaron - Pushpa 2.mp3",
        name: " Angaaron",
        image: "https://imgeng.jagran.com/images/2024/05/29/article/image/pushpa%202%20song%20anga-1716966063701.jpg",
        icon: `<i class="fa-solid fa-music"></i>`
    },
    {
        audio: "./Audio/Arjan Vailly - ANIMAL.mp3",
        name: " Arjun Vailly",
        image: "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202311/blob211123053148.png",
        icon: `<i class="fa-solid fa-music"></i>`
    },
    {
        audio: "./Audio/Bebe Bapu.mp3",
        name: " Bebe Bapu",
        image: "https://i.ytimg.com/vi/cpKolP6mMec/maxresdefault.jpg",
        icon: `<i class="fa-solid fa-music"></i>`
    },
    {
        audio: "./Audio/Chaleya_192(PagalWorld.com.sb).mp3",
        name: " Chaleya",
        image: "https://i.ytimg.com/vi/wr9M-CoxP7A/maxresdefault.jpg",
        icon: `<i class="fa-solid fa-music"></i>`
    },
    {
        audio: "./Audio/Kun Faaya Kun.mp3",
        name: " Kun Faaya Kun",
        image: "https://i.ytimg.com/vi/T94PHkuydcw/maxresdefault.jpg",
        icon: `<i class="fa-solid fa-music"></i>`
    },
    {
        audio: "./Audio/Pushpa Pushpa - Pushpa 2.mp3",
        name: "Pushpa ",
        image: "https://m.economictimes.com/thumb/msid-99219727,width-1200,height-900,resizemode-4,imgsize-59672/pushpa-2-shooting-stopped-and-2023-release-cancelled-heres-everything-we-know-about-allu-arjuns-upcoming-film.jpg",
        icon: `<i class="fa-solid fa-music"></i>`
    },
    {
        audio: "./Audio/Saari Duniya Jalaa Denge.mp3",
        name: " Saari Duniya",
        image: "https://i.ytimg.com/vi/6OXfgu8uKnE/maxresdefault.jpg",
        icon: `<i class="fa-solid fa-music"></i>`
    },
    {
        audio: "./Audio/Sajni.mp3",
        name: " Sajni",
        image: "https://i.ytimg.com/vi/k3g_WjLCsXM/maxresdefault.jpg",
        icon: `<i class="fa-solid fa-music"></i>`
    },
    {
        audio: "./Audio/Systumm - Elvish Yadav.mp3",
        name: " Systumm",
        image: "https://www.sarkariexam.com/wp-content/uploads/2023/08/Fastest-1-Million-Followers-On-Instagram-In-India-Elvish-Yadav-System-Hang.jpg   ",
        icon: `<i class="fa-solid fa-music"></i>`
    }
]

const mapper = (data) => {
    data.map((ele) => {

        let image = document.createElement("img");
        image.src = ele.image;
        image.classList.add("img-fluid", "image");

        let audio = document.createElement("audio");
        audio.src = ele.audio;
        audio.controls = true;
        audio.classList.add("audio");

        let h1 = document.createElement("h1");
        h1.innerHTML = ele.name;
        h1.classList.add("h1");

        let icon = document.createElement("icon");
        icon.innerHTML = ele.icon;
        icon.classList.add("icon");
        icon.addEventListener("click", () => images(ele));

        let div = document.createElement("div");
        div.append(image, h1, audio,icon);
        div.classList.add("div",);

        document.getElementById("show_music").append(div);
    })
}

const images = (ele) =>{
    
let img=  document.getElementById("images").src = (ele.image);
    // img.classList.add("img-fluid","images")  
    let a = document.getElementById("auto")
    a.src = ele.audio;

}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

mapper(music_system);
