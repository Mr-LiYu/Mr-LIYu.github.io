let  Imgs=document.getElementsByName("fifImgOne");
let index=0;
let flag=true;
// 下一张
nextBtn.onclick = function () {
    if (flag) {
        flag = false;
        index++;
        fifth.style.marginLeft = -1580 * index + "px";
        fifth.style.transition = "all 1s";
    } 
}
fifth.addEventListener("transitionend", function () {
    if (index == 2) {
        fifth.style.transition = "all 0s";
        fifth.style.marginLeft = 0;
        index = 0;

        setTimeout(function () {
            fifth.style.transition = "all 1s";
        }, 16.7)
    }
    flag = true;
})
// 上一张
var fifths = fifth.children;
preBtn.onclick = function () {
    if (flag) {
        flag = false;
        index--;
    }
    if (index < 0) {
        fifth.style.transition = "all 0s";
        fifth.style.marginLeft = -1580 * 2 + "px";

        setTimeout(function () {
            fifth.style.transition = "all 1s";
            fifth.style.marginLeft = -1580 * 2 + "px";
        }, 16.7)
        index = fifths.length - 2;
    } else {
        fifth.style.marginLeft = -1580 * index + "px";
        fifth.style.transition = "all 1s";
    }
}
// 鼠标进入变颜色 小导航栏
let changeB=document.getElementsByClassName("changeB");
for(let i=0;i<changeB.length;i++){
    changeB[i].onmouseenter=function(){
        this.style.color="#6699cc"
        this.style.transition="all .5s"
    }
    changeB[i].onmouseleave=function(){
        this.style.color="";
    }
}
// 顶部导航栏
window.onload=function(){
    let head=document.getElementById("head");
    let BigFifth=document.getElementsByClassName("BigFifth");
    // console.log(BigFifth.offsetHeight);
    
    window.onscroll=function(){
     if(document.documentElement.scrollTop>=600){
        head.style.position="fixed"
        head.style.top=0+"px";
        head.style.backgroundColor="grey"
        head.style.opacity="0.6"
     }else{
        head.style.position="absolute"
        head.style.backgroundColor=""

     }
    }
}
// 自动轮播
function autoPlay(){
    index++;
    fifth.style.marginLeft = -1580 * index + "px";
    fifth.style.transition = "all 1s";

}
setInterval("autoPlay()",3000); 
