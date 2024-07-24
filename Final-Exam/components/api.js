
//  Delete User
export const DeleteUser = async (email) => {
    let req = await fetch(`https://json-server-3-bner.onrender.com/user-exam/${email}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(email)
    })
}


const isExist = async (email) => {
    let req = await fetch(`https://json-server-3-bner.onrender.com/user-exam?email=${email}`);
    let res = await req.json()

    if (res.length > 0) {
        return true
    }
    else {
        return false
    }

}

export const create = async (user) => {

    let req = await fetch("https://json-server-4-tqur.onrender.com/food", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })
}

// create a new user
export const createUser = async (user) => {

    let isExists = await isExist(user.email);
    if (isExists) {

        
        alert("User Already Exists || ");
        window.location.href = "/Final-Exam/html/login.html"
    }
    else {
        
        await fetch("https://json-server-3-bner.onrender.com/user-exam", {
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

        alert("Sign-Up Successfully ||");
        window.location.href = "/Final-Exam/"
    }

}

// get user
export const getUser = async () => {

    let req = await fetch("https://json-server-3-bner.onrender.com/user-exam");
    let res = await req.json()
    return res
}

// login user
export const login = async (user) => {
    let req = await fetch(`https://json-server-3-bner.onrender.com/user-exam?email=${user.email}`);
    let res = await req.json()

    if (res.length == 0) {
        alert("User not found");
        window.location.href = "/Final-Exam/html/signup.html"
    }
    else {
        if (res[0].password == user.password) {
            localStorage.setItem("islogin", true) 
            alert("Logged In Successfully || ");
            window.location.href = "/Final-Exam/"
        }
        else {
            alert("Password Is Incorrect || ");
            window.location.href = "https://www.google.com/"
        }
    }
}


// update patch

export const updateUser = async (id, data) => {
    let req = await fetch(`https://json-server-3-bner.onrender.com/user-exam/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)

    })

}
