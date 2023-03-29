class Manage {
    image;
    name;
    age;
    address;
    position;

    constructor(image, name, age, address, position) {
        this.image = image;
        this.name = name;
        this.age = age;
        this.address = address;
        this.position = position;
    }
    getImage() {
        return this.image;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getAddress() {
        return this.address;
    }
    getPosition() {
        return this.position;
    }
}

let player1 = new Manage("image/cr7.jpg", "Tuấn Vũ", "31", "Thanh Hóa", "Tiền Vệ");
let player2 = new Manage("image/brown.jpg", "Thái Trung Kiên ", "22", "Ninh Bình", "Hậu Vệ");
let player3 = new Manage("image/rooney.webp", "Xuân Tường", "22", "Quảng Bình", "Tiền Đạo");
let player4 = new Manage("image/carrick.jpg", "Nam Phong", "23", "Hòa Bình", "Tiền Vệ");
let play1er5 = new Manage("image/vidic.webp", "Đức Trung", "22", "Ninh Bình", "Hậu Vệ");
let play1er6 = new Manage("image/scholes.jpg", "Ngọc Kiên", "20", "Bắc Ninh", "Tiền Vệ");
let player7 = new Manage("image/Ferdinand.jpg", "Phạm Khởi", "24", "Quảng Trị", "Hậu Vệ");
let player8 = new Manage("image/Evra.jpg", "Đức Thịnh", "25", "Ninh Bình", "Hậu Vệ");
let play1er9 = new Manage("image/vandersar.jpg", "Vũ Long", "28", "Hà Nội", "Hậu Vệ");
let player10 = new Manage("image/tevez.jpg", "Xuân Hiếu", "28", "Thanh Hóa", "Tiền Đạo");

let managerPlayer = [player1, player2, player3, player4, play1er5, play1er6, player7, player8, play1er9, player10];
let displayItem = localStorage.getItem("ok");
let flag = true;
let demo;
localStorage.setItem("ok", false)

function reloadDisplay() {

    let data = `<table  style="width: 700px">"
                <tr>
                    <th colspan="2">Image</th>
                    <th colspan="2">Name</th>
                    <th>Age</th>
                    <th colspan="2">Address</th>
                    <th>Position</th>
                    <th style="color: red">` + managerPlayer.length + " players" + `</th>
                </tr>`
    for (let i = 0; i < managerPlayer.length; i++) {
        data += "<tr>"
        data += "<td colspan='2' class='zoom'><img src='" + managerPlayer[i].getImage() + "' alt='Ảnh cầu thủ'></td>"
        data += "<td colspan='2' style='text-align: center'>" + managerPlayer[i].getName() + "</td>"
        data += "<td style='text-align: center'>" + managerPlayer[i].getAge() + "</td>"
        data += "<td colspan='2' style='text-align: center'>" + managerPlayer[i].getAddress() + "</td>"
        data += "<td style='text-align: center'>" + managerPlayer[i].getPosition() + "</td>"
        if (displayItem === "true") {
            document.getElementById("logout").style.display = "block";
            document.getElementById("showAdd").style.display = "block";
            data += "<td><button onclick='updatePlayer(" + i + ")'>Update</button></td>"
            data += "<td><button onclick='deletePlayer(" + i + ")'>Delete</button></td>"
        } else {
            document.getElementById("login").style.display = "block";
        }
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("disPlay").innerHTML = data;
}
function inputPlayer() {
    let img = document.getElementById("image").value;
    let name = document.getElementById("namePlayer").value;
    let age = document.getElementById("agePlayer").value;
    let address = document.getElementById("addressPlayer").value;
    let position = document.getElementById("positionPlayer").value;
    do {
        if (img === "") {
            alert("Nhập Ảnh")
            break;
        }
    } while (img === "")
    do {
        if (name === "") {
            alert("Nhập Tên")
            break;
        }
    } while (name === "")
    do {
        if (age === "") {
            alert("Nhập Tuổi")
            break;
        }
    } while (age === "")
    do {
        if (address === "") {
            alert("Nhập Địa chỉ")
            break;
        }
    } while (address === "")
    do {
        if (position === "") {
            alert("Nhập Vị trí")
            break;
        }
    } while (position === "")
    let newPlayer = new Manage(img, name, age, address, position);
    return newPlayer;
}

function addPlayer() {
    let displayItem1 = localStorage.getItem("ok")
    if (displayItem1 === "false") {
        let newPlayer = inputPlayer();
        console.log(newPlayer)
        if (newPlayer.getImage() !== "") {
            managerPlayer.push(newPlayer);
        } else if (newPlayer.getName() !== "") {
            managerPlayer.push(newPlayer);
        } else if (newPlayer.getAge() !== "") {
            managerPlayer.push(newPlayer);
        } else if (newPlayer.getAddress() !== "") {
            managerPlayer.push(newPlayer);
        } else if (newPlayer.getPosition() !== "") {
            managerPlayer.push(newPlayer);
        }
    }
    reloadDisplay();
}

function updatePlayer(index) {
    // let update = inputPlayer();
    // managerPlayer.splice(index, 1, update);
    document.getElementById("image").value = managerPlayer[index].image;
    document.getElementById("namePlayer").value = managerPlayer[index].name;
    document.getElementById("agePlayer").value = managerPlayer[index].age;
    document.getElementById("addressPlayer").value = managerPlayer[index].address;
    document.getElementById("positionPlayer").value = managerPlayer[index].position;
    demo = index;
    reloadDisplay();
}

function deletePlayer(index) {
    confirm("Bạn chắc chắn muốn xóa")
    {
        managerPlayer.splice(index, 1);
    }
    reloadDisplay();
}

function searchPlayer() {
    let flag = true;
    let search = document.getElementById("search").value;
    for (let i = 0; i < managerPlayer.length; i++) {
        if (search.toUpperCase() === managerPlayer[i].getName().toUpperCase()) {
            document.getElementById("player").innerHTML = "Image: " + `<img  src='` + managerPlayer[i].getImage() + `' alt='Ảnh cầu thủ'>` + "<br>" +
                " Name: " + managerPlayer[i].getName() + "<br/>" +
                " Age: " + managerPlayer[i].getAge() + "<br/>" +
                "Address " + managerPlayer[i].getAddress() + "<br/>" +
                "Position " + managerPlayer[i].getPosition();
        }
        flag = false;
    }
    if (flag) {
        alert("k tim thay")
    }
}

function savePlayer() {
    let img = document.getElementById("image").value;
    let name = document.getElementById("namePlayer").value;
    let age = document.getElementById("agePlayer").value;
    let address = document.getElementById("addressPlayer").value;
    let position = document.getElementById("positionPlayer").value;
    let newPlayer = new Manage(img, name, age, address, position)
    managerPlayer[demo] = newPlayer;
    reloadDisplay();
}

function login() {
    window.location.href = "FormDangNhap.html"
}

function logout() {
    localStorage.setItem("ok", false);
    window.location.href = "Manage.html"
}

function reset() {
    document.getElementById("player").style.display = "none";
    document.getElementById("search").value = "";

}

function resetPlayer() {
    document.getElementById("image").value = "";
    document.getElementById("namePlayer").value = "";
    document.getElementById("agePlayer").value = "";
    document.getElementById("addressPlayer").value = "";
    document.getElementById("positionPlayer").value = "";
    reloadDisplay();

}
