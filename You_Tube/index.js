const get_vedio = async (data) => {
    let req = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${data}&type=video&key=AIzaSyAOvbhK9MQykS28uxJ7wPydiiNOj0jHAOU`)
    let res = await req .json()
    return res.items;
}


const   mapper = (data_1) => {
    data_1.map((ele)=>{
        let img = document.createElement('img')
        img.src = ele.snippet.thumbnails.medium.url
        img.classList.add('img-fluid')
        img.addEventListener('click', () => {
            localStorage.setItem("Video_ID", JSON.stringify(ele.id.videoId))
            window.location.href = "/You_Tube/Player.html" 
        })

        let title = document.createElement('h5')
        title.innerHTML = ele.snippet.title
        
        let channel_name = document.createElement('h4')
        channel_name.innerHTML = ele.snippet.channelTitle

        let div = document.createElement('div')
        div.append(img, title, channel_name)
        document.getElementById('video_tag').append(div)
    })
}

const Handle_Mapper = async (Search_Data) => {
    let data_2 = await API(Search_Data);
    mapper(data_2);
}

const Search_Handle = (e) => {
    e.preventDefault()

    if (e.key == "Enter") {

        let Result_Search = document.getElementById("Video_Search").value

        Handle_Mapper(Result_Search);
    }
}

document.getElementById("Video_Search").addEventListener("submit",Search_Handle)