let n = 0;
let m = 0;
console.log(1)
const string = `
.dundun{
    position: absolute;
    width: 600px;
    height: 600px;
    left:50%;
    top:50vh;
    margin-left: -300px;
    margin-top: -300px;
}
.er1{
    position: absolute;
    background-color: black;
    width: 100px;
    height: 80px;
    left: 50%;
    margin-left: -150px;
    margin-top: -80px;
    transform: rotate(-30deg);
    border-radius: 50px/40px ;
    z-index: -1;
}
.er2{
    position: absolute;
    background-color: black;
    width: 100px;
    height: 80px;
    left: 50%;
    margin-left: 50px;
    margin-top: -80px;
    transform: rotate(30deg);
    border-radius: 50px/40px ;
    z-index: -1;
}
.faces{
    width: 400px;
    height: 400px;
    position: relative;
    left: 50%;
    top:50%;
    margin-left: -200px;
    margin-top:-200px;
    
}
.faceone{
    position: absolute;
    background-color: rgba(44, 185, 63,0.6);
    left: 50%;
    top:50%;
    width: 358px;
    height: 298px;
    margin-left: -189px;
    margin-top: -149px;
    border-radius: 100% 100% 70% 70%;
}
.facetwo{
    position: relative;
    background-color:rgba(94, 110, 199, 0.6);
    width: 356px;
    height: 296px;
    margin-left: 1px;
    margin-top: 1px;
    border-radius: 100% 100% 70% 70%;
}
.face{
    position:absolute;
    margin-left: 1px;
    margin-top: 1px;
    border-radius: 100% 100% 70% 70%;
}
.three{
    background-color: rgb(186, 80, 216,0.6);
    width: 354px;
    height: 294px;
}
.four{
    background-color: rgba(149, 195, 41,0.6);
    width: 352px;
    height: 292px;
}
.five{
    background-color: rgba(154, 45, 182,0.6);
    width: 350px;
    height: 290px;
}
.six{
    background-color: rgba(59, 145, 202,0.6);
    width: 348px;
    height: 288px;
}
.seven{
    background-color: rgba(90, 95, 19,0.6);
    width: 346px;
    height: 286px;
}
.eight{
    background-color: rgba(20, 117, 117,0.6);
    width: 344px;
    height: 284px;
}
.nine{
    background-color: rgba(25, 74, 153,0.6);
    width: 342px;
    height: 282px;
}
.ten{
    background-color: rgb(254, 254, 254);
    width: 340px;
    height: 280px;
    margin-left: 1px;
    margin-top: 1px;
    border-radius: 100% 100% 70% 70%;
}


.lefteye{
    position: absolute;
    background-color: rgb(9,8,11);
    width: 80px;
    height: 140px;
    margin-left: 30px;
    margin-top: 40px;
    border-radius:60% / 50% ;
    transform: rotate(35deg);
    z-index: 10;
}
.righteye{
    position: absolute;
    background-color: rgb(9,8,11);
    width: 80px;
    height: 140px;
    margin-left: 230px;
    margin-top: 40px;
    border-radius:60% / 50% ;
    transform: rotate(-35deg);
    z-index: 10;
}
.lefteye2{
    background-color: white;
    width: 40px;
    height: 52px;
    transform: rotate(-35deg);
    border-radius: 60%/50%;
    margin-top: 28px;
    margin-left: 28px;
}
.righteye2{
    background-color: white;
    width: 40px;
    height: 52px;
    transform: rotate(35deg);
    border-radius: 60%/50%;
    margin-top: 28px;
    margin-left: 12px;
}
.lefteye3{
    position: absolute;
    background-color: rgb(5,2,1);
    width: 34px;
    height: 44px;
    transform: rotate(5deg);
    border-radius: 60%/50%;
    top:7%;
    left: 5%;
}
.righteye3{
    position: absolute;
    background-color: rgb(5,2,1);
    width: 34px;
    height: 44px;
    transform: rotate(-5deg);
    border-radius: 60%/50%;
    top:7%;
    left: 5%;
}
.lefteye4{
    position: absolute;
    /* background-color: rgba(139,129,76,0.5); */
    background-image: radial-gradient(rgb(110, 100, 77) 60%, rgb(114, 116, 78) 15%, rgba(100, 96, 77, 0.5) );
    width: 28px;
    height: 36px;
    border-radius: 60%/50%;
    top:8%;
    left: 5%;
}
.righteye4{
    position: absolute;
    /* background-color: rgba(139,129,76,0.5); */
    background-image: radial-gradient(rgb(110, 100, 77) 60%, rgb(114, 116, 78) 15%, rgba(100, 96, 77, 0.5) );
    width: 28px;
    height: 36px;
    border-radius: 60%/50%;
    top:8%;
    left: 5%;
}
.lefteye5{
    position: absolute;
    background-color:  rgb(5,2,1);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left:4px;
    top:6px;
}
.righteye5{
    position: absolute;
    background-color:  rgb(5,2,1);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left:4px;
    top:6px;
}
.nose1{
    position: absolute;
    border:10px solid red;
    border-color:rgb(9,8,11) transparent transparent transparent;
    left: 50%;
    top:45%;
    margin-left: -10px;
    z-index: 10;
}
.nose2{
    position: absolute;
    background-color: rgb(9,8,11);
    width: 20px;
    height: 3px;
    left: 50%;
    top:44%;
    margin-left: -10px;
    border-radius: 40% 40% 0 0;
    z-index: 1;
}
.mouse1{
    position: absolute;
    border: 1px solid black;
    border-right-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent;
    width: 100px;
    height: 80px;
    border-radius: 200px/150px;
    left: 50%;
    margin-left:-50px;
    top:34%;
    background-color: red;
    z-index: 0;
}
.mouse2{
    position: absolute;
    border: 1px solid black;
    border-right-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent;
    width: 100px;
    height: 80px;
    border-radius: 1000px/999px;
    left: 50%;
    margin-left:-50px;
    top:33.2%;
    background-color: rgb(254, 254, 254); 
}
.box1{
    position: absolute;
    width: 23.6px;
    height: 20px;  
    left:37%; 
    top:36%;
    transform:rotate(32deg) ;
    background-color: rgb(254, 254, 254);
    margin-left: -10px;
    margin-top: 40px;
}
.box2{
    position: absolute;
    width: 26px;
    height: 24px;  
    left:61.2%; 
    top:34%;
    transform:rotate(-32deg) ;
    background-color: rgb(254, 254, 254); 
    margin-left: -10px;
    margin-top: 40px;
    z-index:inherit;
}
`
const string2 = `亲爱的宝贝，谢谢你一直以来的陪伴。
今天是你的生日，也是情人节。
祝你生日快乐，情人节开心！
送你一只丑丑的冰墩墩，
它会像丑丑的我一样一直陪伴着你
`
let time = 0;
const play = () => {
    demo1.innerText = string2.substr(0, m);
    // demo2.scrollTop = 999999
    demo1.scrollTop = demo1.scrollHeight
    m = m + 1;
    if (m > string2.length) {
        window.clearInterval(id)
        return
    }
}
const play2 = () => {
    demo2.innerHTML = string.substr(0, n);
    // demo2.scrollTop = 999999
    n = n + 1;
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
}
let id = setInterval(play, 300)
let id2 = setInterval(play2, time)