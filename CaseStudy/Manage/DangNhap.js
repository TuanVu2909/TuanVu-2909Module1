class logIn {
    UserName
    PassWord

    constructor(username,password) {
        this.UserName = username;
        this.PassWord = password;

    }

    getUsername() {
        return this.UserName
    }

    getPassword() {
        return this.PassWord;
    }

}
let user1 = new logIn("addmin","123qwe");
let manage = [user1]
console.log(manage)


function test(){
    let flag = true;
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (name === "" && pass === "") {
        alert("Nhập Username và Password")
        flag = false
    } else if (name === undefined || name === "") {
        alert("Nhập Username");
        flag = false
    } else if (pass === undefined || pass === "") {
        alert("Nhập Password");
        flag = false
    }
    if(flag){
        dangNhap();
    }
}


function dangNhap(){
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let flag = true;
    for (let i = 0; i < manage.length; i++) {
        if (name === manage[i].getUsername() && pass === manage[i].getPassword()) {
            flag = false;
        }
    }
    if (flag) {
        alert("đăng nhập không thành công")

    } else {
        alert("đăng nhập thành công")
        window.document.location.href= 'Manage.html';

    }
}
function cancel(){
    window.location.href = "Manage.html"
}


// function dangKy(){
//     let name = document.getElementById("fullName").value;
//     let userName = document.getElementById("userName").value;
//     let passWord = document.getElementById("passWord").value;
//     let confirmPassword = document.getElementById("cfPassWord").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phoneNumber").value;
//     let address = document.getElementById("address").value;
// let newUser = [name,userName,passWord,confirmPassword, email,phone,address]
//     let flag = true;
//     for (let i = 0; i< newUser.length; i++){
//         if(userName === manage[i].getUsername()){
//             flag = false;
//         }
//         if (passWord === manage[i].getPassword()){
//             flag = false;
//         }
//         if (confirmPassword !== passWord){
//             flag = false;
//         }
//         if (email === manage[i].getEmail()){
//              flag = false;
//         }
//         if (phone === manage[i].getPhoneNumber()){
//             flag = false;
//         }
//     }
// }
// dangKy();