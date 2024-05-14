let student = [];
let total_Salary =0;

const uiMaker = () => {
    document.getElementById("tbody").innerHTML = "";
    student.map((ele,index) => {
        tr = document.createElement("tr");
        employee = document.createElement("td");
        employee.innerHTML = ele.name;
        job = document.createElement("td");
        job.innerHTML = ele.job;
        department = document.createElement("td");
        department.innerHTML = ele.company;
        salary = document.createElement("td");
        salary.innerHTML = ele.salary;
        email = document.createElement("td");
        email.innerHTML = ele.email;
        experience = document.createElement("td");
        experience.innerHTML = ele.experience;
        role = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => handleline(index,ele.salary));
        let td4 = document.createElement("td");
        td4.append(deleteButton);
        if(ele.experience > 5){
            role.innerHTML = "Senior";
        }
        else{
            role.innerHTML = "junior";
        }
        tr.append(employee,job,department,salary,email,experience,role,td4)
        document.getElementById("tbody").append(tr);
        
    });
    document.getElementById("total").innerHTML= `Amployee Total ${student.length} Total Salary : ${total_Salary}`
}
const handlcompany = (e) => {
    e.preventDefault()
    let data = {
        name: document.getElementById("name").value,
        job: document.getElementById("job").value,
        company: document.getElementById("department").value,
        salary: Number(document.getElementById("salary").value),
        experience: document.getElementById("experience").value,
        email: document.getElementById("email").value,
    }

    total_Salary+=data.salary;

    student.push(data);
    uiMaker();
}
const handleline = (index,salary) => {
    student.splice(index, 1);
    total_Salary-=salary;
    uiMaker();
}


const deletall = () =>{
    document.getElementById("tbody").innerHTML = ""
    student = [];
    total_Salary=0;
    uiMaker()
}

document.getElementById("fire").addEventListener("click",deletall)
document.getElementById("hire").addEventListener("click", handlcompany)
