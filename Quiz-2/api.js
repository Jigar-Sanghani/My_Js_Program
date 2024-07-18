const Qustion = async () => {
    let req = await fetch (`https://json-server-fikb.onrender.com/qustion`);
    let res = await req.json();
    return res
}
