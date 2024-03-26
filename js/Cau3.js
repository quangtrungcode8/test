var c = 0;
var t;
var timer_is_on = 0;
function setBG(){
    let a = [
        "url(../Images/b1.jpg)",
        "url(../Images/b2.jpg)",
        "url(../Images/b3.jpg)",
        "url(../Images/b4.jpg)",
        "url(../Images/b5.jpg)",
        "url(../Images/b6.jpg)",
        "url(../Images/b7.jpg)",
        "url(../Images/b8.jpg)",
        "url(../Images/b9.jpg)",
        "url(../Images/b10.jpg)"
        

    ];
    let n = a[Math.round(Math.random()* a.length)];
    let d = document.getElementById("div1");
    d.style.backgroundImage = n;
    d.style.backgroundSize = "cover";
    t = setTimeout(setBG, 1000);
}
function play(){
    if(!timer_is_on){
        timer_is_on = 1;
        setBG();
    }
}
function stop(){
    clearTimeout(t);
    timer_is_on = 0;
}