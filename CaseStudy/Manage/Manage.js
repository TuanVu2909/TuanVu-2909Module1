class Manage {
    image;
    Name;
    Age;
    Address;
    Position;

    constructor(image, name, age, address, position) {
        this.image = image;
        this.Name = name;
        this.Age = age;
        this.Address = address;
        this.Position = position;
    }

    getImage() {
        return this.image;
    }

    getName() {
        return this.Name;
    }

    getAge() {
        return this.Age;
    }

    getAddress() {
        return this.Address;
    }

    getPosition() {
        return this.Position;
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

let flag = true;

function reloadDisplay() {
    let data = `<table  style="width: 700px">"
                <tr>
                    <th colspan="2">Ảnh</th>
                    <th colspan="2">Name</th>
                    <th>Age</th>
                    <th colspan="2">Address</th>
                    <th>Position</th>
                    <th style="color: red">` + managerPlayer.length + " players" + `</th>
                </tr>`

    for (let i = 0; i < managerPlayer.length; i++) {
        data += "<tr>"
        data += "<td colspan='2'><img src='" + managerPlayer[i].getImage() + "' alt='Ảnh cầu thủ'></td>"
        data += "<td colspan='2' style='text-align: center'>" + managerPlayer[i].getName() + "</td>"
        data += "<td style='text-align: center'>" + managerPlayer[i].getAge() + "</td>"
        data += "<td colspan='2' style='text-align: center'>" + managerPlayer[i].getAddress() + "</td>"
        data += "<td style='text-align: center'>" + managerPlayer[i].getPosition() + "</td>"
        data += "<td><button onclick='updatePlayer(" + i + ")'>Update</button></td>"
        data += "<td><button onclick='deletePlayer(" + i + ")'>Delete</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("disPlay").innerHTML = data;
    //console.log(data)
    if (flag) {
        document.getElementById("disPlay").style.display = "block"
        flag = false
    } else {
        document.getElementById("disPlay").style.display = "none"
        flag = true
    }
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
    let newPlayer = inputPlayer();
    console.log(newPlayer)
    if (newPlayer.getImage() !== "") {
        managerPlayer.push(newPlayer);
    }
    if (newPlayer.getName() !== "") {
        managerPlayer.push(newPlayer);
    }
    if (newPlayer.getAge() !== "") {
        managerPlayer.push(newPlayer);
    }
    if (newPlayer.getAddress() !== "") {
        managerPlayer.push(newPlayer);
    }
    if (newPlayer.getPosition() !== "") {
        managerPlayer.push(newPlayer);
    }
    reloadDisplay();
}

function updatePlayer(index) {
    let update = inputPlayer();
    managerPlayer.splice(index, 1, update);
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
    let index = 0;
    let search = document.getElementById("search").value;
    for (let i = 0; i < managerPlayer.length; i++) {
        if (search === managerPlayer[i].getName()) {
            index = i;
            document.getElementById("player").innerHTML = "Image: " + managerPlayer[index].getImage() + "<br>" +
                " Name: " + managerPlayer[index].getName() + "<br/>" +
                " Age: " + managerPlayer[index].getAge() + "<br/>" +
                "Address " + managerPlayer[index].getAddress() + "<br/>" +
                "Position " + managerPlayer[index].getPosition();
            break;
        } else {
            alert("Nhập lại");
            break;
        }
    }
}

function login() {
    window.location.href = "FormDangNhap.html"
}
// function searchPosition(obj){
//     let position = document.getElementById("select").value;
//     let index = obj.value;
//     for (let i = 0; i< managerPlayer.length; i++){
//         if (index === ""){
//             alert("Nhập chọn vị trí");
//             break;
//         }
//         if (index === "gk" ){
//             position.innerHTML = "Cầu thủ: " + managerPlayer[i].getName();
//         }
//     }
//     reloadDisplay();
// }