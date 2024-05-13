

document.getElementById("studentData").addEventListener("submit", handleStudentData);

let student = []


const handleStudentData = (e) => {
    e.preventDefault();
    let data = {
        name : document.getElementById("name").value,
        course : document.getElementById("course").value,
        grid : document.getElementById("grid").value,
    }
    student.push(data);
    uimaker();
}

const uimaker = () => {
    document.getElementById("studentData").innerHTML = "";
    student.map((ele) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = ele.name;
        let td2 = document.createElement("td");
        td2.innerHTML = ele.course;
        let td3 = document.createElement("td");
        td3.innerHTML = ele.grid;

        tr.append(td1, td2, td3);
        document.getElementById("tbody").append(tr);
    })
}