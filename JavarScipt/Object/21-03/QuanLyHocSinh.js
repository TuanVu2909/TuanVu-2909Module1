class   StudentManagement {
    Name
    Age
    Gender
    Add

    constructor(name,age,gender) {
        this.Name = name
        this.Age = age
        this.Gender = gender

    }
    getName(){
        return this.Name;
    }
    getAge(){
        return this.Age;
    }
    getGender(){
        return this.Gender;
    }

    }

let stud1 = new StudentManagement("Chữ",20,"Male")
let stud2 = new StudentManagement("Hùng",21,"Male")
let stud3 = new StudentManagement("Ly",20,"Male")
arr = [stud1, stud2, stud3]

function inputStudent(){
    let name;
    let age;
    let gender;
    do{
        name = prompt("nhập Name:");
        if(name === "" && name === undefined){
            alert("Nhập lại")
        }
    }while(name === "" && undefined)
    do{
        age = prompt("nhập Age:");
        if(age === "" && age === undefined){
            alert("Nhập lại")
        }
    }while(age === "" && age === undefined)
    do{
        gender = prompt("nhập Gender:");
        if(gender === "" && gender === undefined){
            alert("Nhập lại")
        }
    }while(gender === "" && gender === undefined)

     // let age = prompt("nhập Age");
     // let gender = prompt("nhập Male");
     let newStudent = new StudentManagement(name,age,gender)
    console.log(newStudent)
     return newStudent
}
function addStudent(){
    let newStudent = inputStudent();
    if (newStudent !== undefined) {
        arr.push(newStudent);
        console.log(arr)
        reloadDisplay()
    }
}


function updateStudent(index){
    let updateStudent = inputStudent()
    arr.splice(index,1,updateStudent)
    reloadDisplay();
}

function deleteStudent(index){
    if (confirm("bạn chắc chắn xóa ko")) {
        arr.splice(index, 1)
        reloadDisplay();
    }
}
function searchStudent() {
    let index = 0;
    let search = document.getElementById("search").value;
    for (let i = 0; i < arr.length; i++) {
        if (search === arr[i].getName()) {
            index = i;
            document.getElementById("display2").innerHTML ="Tên: " + arr[index].getName();
            break;
        } else {
            alert("nhập lại")
            break;
        }
    }
}
let flag = true;
function  reloadDisplay() {
    let data = "<table border='1px' style='width: 250px'>";
    for (let i = 0; i < arr.length; i++) {
        data += "<tr>"
        data += "<td>" + arr[i].getName() + "</td>"
        data += "<td>" + arr[i].getAge() + "</td>"
        data += "<td>" + arr[i].getGender() + "</td>"
        data += "<td> <button onclick='updateStudent(" + i + ")'>Edit</button></td>"
        data += "<td> <button onclick='deleteStudent(" + i + ")'>Delete</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("display").innerHTML = data;
    if (flag){
        document.getElementById("display").style.display = "block"
        flag = false
    }else {
        document.getElementById("display").style.display = "none"
        flag = true
    }
   }





