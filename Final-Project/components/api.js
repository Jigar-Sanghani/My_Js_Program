//  Delete User
export const DeleteUser = async (id) => {
    let req = await fetch(`https://json-server-4-tqur.onrender.com/user_final/${id}`, {
        method: "DELETE",
    })
}


const isExists = async (email) => {
    let req = await fetch(`https://json-server-4-tqur.onrender.com/user_final?email=${email}`);
    let res = await req.json()

    if (res.length == 0) {
        return true
    }
    else {
        return false
    }

}

// create a new user
export const createUser = async (user) => {

    let isExists = await isExists(user.email);
    if (isExists) {
        alert("User Already Exists || ");
    }
    else {
        await fetch("https://json-server-4-tqur.onrender.com/user_final", {
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

// get user
export const getUser = async () => {

    let req = await fetch("https://json-server-4-tqur.onrender.com/user_final");
    let res = await req.json()
    return res
}

// login user
export const login = async (user) => {
    let req = await fetch(`https://json-server-4-tqur.onrender.com/user_final?email=${user.email}`);
    let res = await req.json()

    if (res.length == 0) {
        alert("User not found");
    }
    else {
        if (res[0].password == user.password) {
            alert("Logged In Successfully || ");
        }
        else {
            alert("Password Is Incorrect || ");
        }
    }
}


// update patch

export const updateUser=async(id ,data)=>{
  let req=await  fetch(`https://json-server-4-tqur.onrender.com/user_final/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)

    })

}