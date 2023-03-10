function login() {
    let username = document.getElementById("User").value;
    let pass = document.getElementById("Pass").value;

    if (username === "admin" && pass === "123") {
        alert("Đăng nhập tài khoản admin");
    } else if (username === "user" && pass === "123") {
        alert("dang nhap tai khoan user");
    } else {
        alert("tai khoan khong ton tai");
    }


}