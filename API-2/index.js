import { Create_User, Delete_User, Get_User, Update_User } from "./api/User_Api";

let id = -1;

const Handle_Data = (e) => {

    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }


    if (id == -1) {
        Create_User(data)
    }
    else {
        alert("Update-User")
        Update_User(ele.id, data)
    }

}


const Update_Input_Value = (ele) => {

    document.getElementById('name').value = ele.name
    document.getElementById('email').value = ele.email
    document.getElementById('password').value = ele.password
    document.getElementById('submit').value = "Update"
    id = ele.id
}

const Deleat_Element = (ele) => {
    Delete_User(ele.id)
}

const Mapper = (data) => {

    data.map((ele) => {

        let name = document.createElement("h3")
        name.innerHTML = ele.name;
        let email = document.createElement("h4")
        email.innerHTML = ele.email;
        let password = document.createElement("p")
        password.innerHTML = ele.password;
        let update = document.createElement("button")
        update.innerHTML = "Update User"
        update.addEventListener("click", () => Update_Input_Value(ele))
        let deleteUser = document.createElement("button")
        deleteUser.innerHTML = "Delete User"
        deleteUser.addEventListener("click", () => Deleat_Element(ele))
        let div = document.createElement("div")
        div.append(name, email, password, update, deleteUser)
        document.getElementById("User_List").append(div)
    })


}

let data_1 = await Get_User()
Mapper(data_1)

document.getElementById("User_Data").addEventListener("submit", Handle_Data)