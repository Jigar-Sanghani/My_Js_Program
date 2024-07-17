const get_vedio = async (search) => {
    let req = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search   }&type=video&key=AIzaSyDNVBaE4O5vcC3LWmPtmk7Cnzx0GvmXWVA`)
    let res = await req .json()
    return res.items;
}

const   mapper = (data) => {
    data.map((ele) => {   
        let img = document.createElement('img')
        img.src = ele.snippet.thumbnails.medium.url
        img.classList.add('channel_image')
        img.addEventListener('click', () => {
            localStorage.setItem("Video_ID", JSON.stringify(ele.id.videoId))
            window.location.href = "/You_Tube/Player.html"  
        })

        let title = document.createElement('h5')
        title.innerHTML = ele.snippet.title
        title.classList.add('title')
        
        let channel_name = document.createElement('h4')
        channel_name.innerHTML = ele.snippet.channelTitle
        channel_name.classList.add('channel_name')

        let div = document.createElement('div')
        div.append(img, title, channel_name)
        div.classList.add('video_div')
        
        document.getElementById('video_tag').append(div)
    });
}

const Handle_Mapper = async (search) => {
    let data = await get_vedio(search);
    mapper(data);
}

const Search_Handle = (e) => {
    e.preventDefault(); 
    if (e.key == "Enter") {

        let Result_Search = document.getElementById("Video_Search").value

        Handle_Mapper(Result_Search);
    }
}

document.getElementById("Video_Search").addEventListener("keypress",Search_Handle)