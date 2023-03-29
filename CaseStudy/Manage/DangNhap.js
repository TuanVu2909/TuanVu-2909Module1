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

// let manage = JSON.parse(window.localStorage.getItem("key"));
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
        login();
    }
}

function login() {
    localStorage.getItem("ok");
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    for (let i = 0; i < manage.length; i++) {
        if (name === manage[i].getUsername() && pass === manage[i].getPassword()) {
            localStorage.setItem("ok", true)
            window.document.location.href = 'Manage.html';
        } else {
            localStorage.setItem("ok", false)
            alert("đăng nhập không thành công")

        }

    }
}
function cancel(){
    window.location.href = "Manage.html"
}


