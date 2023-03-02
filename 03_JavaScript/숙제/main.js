const id = document.getElementById("userId");
const pw = document.getElementById("userPw");
const pw2 = document.getElementById("userPw2");
const name = document.getElementById("userName");
const phone = document.getElementById("userPhone");
const ssn = document.getElementById("userJumin");
const email = document.getElementById("userEmail");

let count = 0;
let a;
let b;
let c;
let d;
let e;
let f;
let g;



id.addEventListener("keyup", function() {
    const regEx1 = /^[a-z0-9]{5,}$/;
    const resultId = document.getElementById("id");
    if(regEx1.test(this.value)) {
        resultId.innerText = "아이디 사용 가능"
        count = 1;
        a = count;
    } else {
        resultId.innerText = "불가능"
        count = 0;
        a = count;
    }
    
})

pw.addEventListener("keyup", function() {
    const regEx2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const resultPw = document.getElementById("pw");
    if(regEx2.test(this.value)) {
        resultPw.innerText = "비밀번호 사용 가능"
        count = 1;
        b = count;
    } else {
        resultPw.innerText = "불가능"
        count = 0;
        b = count;
    }
})

pw2.addEventListener("keyup", function() {
    const resultPw2 = document.getElementById("pw2");
    if(pw.value == pw2.value) {
        resultPw2.innerText = "비밀번호 일치함"
        count = 1;
        c = count;
    } else {
        resultPw2.innerText = "일치하지 않음"
        count = 0;
        c = count;
    }
})

name.addEventListener("keyup", function() {
    const regEx3 = /^[가-힣]{2,}$/;
    const resultName = document.getElementById("name");
    if(regEx3.test(this.value)) {
        resultName.innerText = "유효한 형식입니다"
        count = 1;
        d = count;
    } else {
        resultName.innerText = "잘못된 형식입니다"
        count = 0;
        d = count;
    }
})

phone.addEventListener("keyup", function() {
    const regEx4 = /^([010]{2,3})(\d{3,4})(\d{4})$/;
    const resultPhone = document.getElementById("phone");
    if(regEx4.test(this.value)) {
        resultPhone.innerText = "사용가능"
        count = 1;
        e = count;
    } else {
        resultPhone.innerText = "010으로 시작해주세요"
        count = 0;
        e = count;
    }
})

ssn.addEventListener("keyup", function() {
    const regEx5 = /^[1234]/;
    const resultSSN = document.getElementById("ssn");
    if(regEx5.test(this.value)) {
        resultSSN.innerText = "사용 가능"
        count = 1;
        f = count;
    } else {
        resultSSN.innerText = "불가능"
        count = 0;
        f = count;
    }
})

email.addEventListener("keyup", function() {
    const regEx6 = /[a-z0-9]+@[a-z]+\.[com]/;
    const resultEmail = document.getElementById("email");
    if(regEx6.test(this.value)) {
        resultEmail.innerText = "사용 가능"
        count = 1;
        g = count;
    } else {
        resultEmail.innerText = "불가능"
        count = 0;
        g = count;
    }
})

document.getElementById("join").addEventListener("click", function() {
    count = Number(a+b+c+d+e+f+g);
    if(count == 7) {
        alert("계정생성 완료")
    } else {
         alert("유효성 검사가 완료되지 않음")
    }
    console.log(count);
})




