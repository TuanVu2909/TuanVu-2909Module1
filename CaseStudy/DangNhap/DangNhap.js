class logIn {
    UserName
    PassWord
    PhoneNumber
    Email
    Address
    Gender
    constructor(username,password,email,phonenumber,gender,address) {
        this.UserName = username;
        this.PassWord = password;
        this.Email = email;
        this.PhoneNumber = phonenumber;
        this.Gender = gender
        this.Address = address
    }

    getUsername() {
        return this.UserName
    }

    getPassword() {
        return this.PassWord;
    }

    getEmail() {
        return this.Email;
    }

    getPhonenumber() {
        return this.PhoneNumber;
    }

    getGender() {
        return this.Gender;
    }

    getAddress() {
        return this.Address;
    }
}
let user1 = new logIn("qwerty","123qwe","qwerty@gmail.com",1111111111,"male","Thanh Hoa");
let user2 = new logIn("qwerty1","123qwe","qwerty1@gmail.com",1111111112,"male","Thanh Hoa");
let user3 = new logIn("qwerty2","123qwe","qwerty2@gmail.com",1111111113,"female","Thanh Hoa");
let user4 = new logIn("qwerty3","123qwe","qwerty3@gmail.com",1111111114,"female","Thanh Hoa");
let user5 = new logIn("qwerty4","123qwe","qwerty4@gmail.com",1111111115,"male","Thanh Hoa");
let user6 = new logIn("qwerty5","123qwe","qwerty5@gmail.com",1111111116,"male","Thanh Hoa");
let manage = [user1,user2,user3,user4,user5,user6]
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

    }window.location.href = 'https://www.google.com/';
}


