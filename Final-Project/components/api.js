//  Delete User
export const DeleteUser = async (email) => {
    let req = await fetch(`https://json-server-2-e6hf.onrender.com/user_final/${email}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(email)
    })
}


const isExist = async (email) => {
    let req = await fetch(`https://json-server-2-e6hf.onrender.com/user_final?email=${email}`);
    let res = await req.json()

    if (res.length > 0) {
        return true
    }
    else {
        return false
    }

}

export const create = async (user) => {

    let req = await fetch("https://json-server-1-4hf7.onrender.com/courses", {
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
        window.location.href = "/Final-Project/log-in/login.html"
    }
    else {


        await fetch("https://json-server-2-e6hf.onrender.com/user_final", {
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
        window.location.href = "/Final-Project/"
    }

}

// get user
export const getUser = async () => {

    let req = await fetch("https://json-server-2-e6hf.onrender.com/user_final");
    let res = await req.json()
    return res
}

// login user
export const login = async (user) => {
    let req = await fetch(`https://json-server-2-e6hf.onrender.com/user_final?email=${user.email}`);
    let res = await req.json()

    if (res.length == 0) {
        alert("User not found");
        window.location.href = "/Final-Project/signup/signup.html"
    }
    else {
        if (res[0].password == user.password) {
            alert("Logged In Successfully || ");
            localStorage.setItem("islogin", true)
            window.location.href = "/Final-Project/"
        }
        else {
            alert("Password Is Incorrect || ");
            window.location.href = "https://www.google.com/"
        }
    }
}


// update patch

export const updateUser = async (id, data) => {
    let req = await fetch(`https://json-server-2-e6hf.onrender.com/user_final/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)

    })

}