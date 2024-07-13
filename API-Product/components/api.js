export const Delete_User = async (id) => {
    let req = await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
    })
}


export const Is_Exists = async (email) => {
    let req = await fetch(` http://localhost:3000/user?email=${email}`);
    let res = await req.json()

    if (res.length > 0) {
        return true
    }
    else {
        return false
    }

}

export const Create_User = async (user) => {

    if (await Is_Exists(user.email)) {
        alert("User Already Exists !!");
    }
    else {
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)

        })
            .then((req) => req.json())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const Get_User = async () => {

    let req = await fetch("http://localhost:3000/user");
    let res = await req.json()
    return res
}

export const Login_user = async (user) => {
    let req = await fetch(` http://localhost:3000/user?email=${user.email}`);
    let res = await req.json()

    if (res.length == 0) {
        alert("User Not Found !!");
    }
    else {
        if (res[0].password == user.password) {
            alert("Log-In Successfully !!");
        }
        else {
            alert("Password Is Incorrect !!");
        }
    }
}

export const Update_User=async(id ,data)=>{
  let req=await  fetch(`http://localhost:3000/user/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)

    })

}