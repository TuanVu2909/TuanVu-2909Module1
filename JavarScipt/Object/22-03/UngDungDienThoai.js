class Mobile{
    pin // dung lương pin
    message // tin nhắn đang soạn thảo
    listMessageFrom  // danh sách tin nhắn đã nhận được
    listMessageTo // danh sách tin nhắn đã gửi đi
    status // lưu trữ trạng thái của điện thoại( bật tắt)

    constructor(pin, status, listFrom, listTo) {
        this.pin = pin;
        this.status = status;
        this.listMessageFrom = listFrom;
        this.listMessageTo = listTo;
    }
    getStatus(){
        return this.status;
    }
    onOffMobile(){
        if(this.status === true){
            this.status = false;
        }
        else{
            this.status = true;
        }
    }
    chargePin(){
        alert("Đang sạc pin");
        this.pin = 100;
        alert("Pin đã " + this.pin + "%")
    }

    // soạn tin nhắn
    texting(message){
        this.message = message;
    }

    // lấy tin nhắn ở hội thoại đã nhận
    getMessageFrom(){
        return this.listMessageFrom;
    }
    // lấy tin nhắn ở hội thoại đã gửi đi
    getMessageTo(){
        return this.listMessageTo;
    }
}

let listFrom = ["Xin chào", "Bạn khỏe không", "Bạn hiểu không"];
let listTo = ["Hi", "Tôi khỏe", "Tôi hiểu"];
let mobilePhone = new Mobile(30, false,listFrom, listTo );
let mobilePhone2 = new Mobile(50, true, [], [])
// console.log(mobilePhone.pin);
// mobilePhone.chargePin();
// console.log(mobilePhone.pin);

mobilePhone.getMessageFrom();
mobilePhone.getMessageTo();

function getMessageFromHTML(){
    let mess = document.getElementById("message").value;
    mobilePhone.texting(mess);
    // alert("Đã gửi tin nhắn với nội dung: " + mobilePhone.message);
    document.getElementById("seen").innerText
        = "Đã gửi tin nhắn với nội dung: " + mobilePhone.message;
}

function checkStatus(){
    if(mobilePhone.getStatus() === true){
        alert("Điện thoại đang bật")
    }
    else {
        alert("Điện thoại đang tắt")
    }
}
function onOff(){
    mobilePhone.onOffMobile();
}
function charge(){
    mobilePhone.chargePin();
}
function seenMessageFrom(){ // xử lý để hiển thị tin nhắn
    let mess = mobilePhone.getMessageFrom();
    let str = "<table>" ;
    for(let i=0; i< mess.length; i++){
        str += "<tr>"
        str += "<td>" + mess[i]+ `</td>`;
        str += "</tr>"
    }
    str += "</table>";
    document.getElementById("seen").innerHTML = str;

}
function seenMessageTo(){
    let mess = mobilePhone.getMessageTo();
    let str = "<table>" ;
    for(let i=0; i< mess.length; i++){
        str += "<tr>"
        str += "<td>" + mess[i]+ `</td>`;
        str += "</tr>"
    }
    str += "</table>";
    document.getElementById("seen").innerHTML = str;
}