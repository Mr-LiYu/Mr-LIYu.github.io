// No.3  旋转
var radius = document.getElementsByTagName("figcaption");


var index = 0;
for (var i = 0; i < radius.length; i++) {
    radius[i].index = i;
    radius[i].onmouseenter = function () {
        radius[this.index].style.rotate = "360deg";
        this.style.transition = "all 1s";
    }
    radius[i].onmouseleave = function () {
        radius[this.index].style = "none"
    }

}
// NO.4 那里家具特色服务
var flag = true;
// 下一张
nextBtn.onclick = function () {
    if (flag) {
        flag = false;
        index++;
        fifth.style.marginLeft = -1200 * index + "px";
        fifth.style.transition = "all .5s";
    }
}
fifth.addEventListener("transitionend", function () {
    if (index == 3) {
        fifth.style.transition = "all 0s";
        fifth.style.marginLeft = 0;
        index = 0;

        setTimeout(function () {
            fifth.style.transition = "all .5s";
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
        fifth.style.marginLeft = -1200 * 3 + "px";

        setTimeout(function () {
            fifth.style.transition = "all .5s";
            fifth.style.marginLeft = -1200 * 3 + "px";
        }, 16.7)
        index = fifths.length - 2;
    } else {
        fifth.style.marginLeft = -1200 * index + "px";
    }
}

// No.5 查看更多
var mores=document.getElementsByClassName("more")
for(var i=0;i<mores.length;i++){
    mores[i].onmouseenter=function(){
        this.style.backgroundColor="#3d3331";
        this.style.color="#ffffff";
        this.style.transition="all .4s"
    }
    mores[i].onmouseleave=function(){
        this.style="";
        this.style.transition="all .4s"
    }
}

// 最后一个提交按钮
button1.onmouseenter=function(){
    this.style.backgroundColor="#6699cc";
    this.style.transition="all .4s"
}
button1.onmouseleave=function(){
    this.style="";
    this.style.transition="all .4s"
}

// No.2 阴影
var b=document.getElementsByClassName("shadows")

for(var i=0;i<b.length;i++){
    b[i].index=i;
    b[i].onmouseenter=function(){        
        b[this.index].style.backgroundColor="black";
        b[this.index].style.opacity=0.6;
        this.style.transition="all .4s"
    }
    b[i].onmouseleave=function(){         
        b[this.index].style.backgroundColor="";
        b[this.index].style.opacity=1;
        this.style.transition="all .4s"
    }
}
// N0.5阴影
var shads=document.getElementsByClassName("shad");
for(var i=0;i<b.length;i++){
    shads[i].index=i;
    shads[i].onmouseenter=function(){        
        // shads[this.index].style.backgroundColor="red";
        shads[this.index].style.opacity=0.6;
        this.style.transition="all .4s"
    }
    shads[i].onmouseleave=function(){         
        // shads[this.index].style.backgroundColor="";
        shads[this.index].style.opacity=1;
        this.style.transition="all .4s"
    }
}
// 侧边导航
var  slideBigs=document.getElementsByClassName("slideBig");
var  slideTwos=document.getElementsByClassName("slideTwo");
for(var i=0;i<slideBigs.length;i++){
    slideBigs[i].index=i;
    slideTwos[i].index=i;
    slideBigs[i].onmouseenter=function(){
        slideBigs[this.index].style.width=150+"px";
        slideBigs[this.index].style.transition="all 1s";
        slideTwos[this.index].style.backgroundColor="red";
    }
    slideBigs[i].onmouseleave=function(){
        slideBigs[this.index].style.width=55+"px";
        slideTwos[this.index].style.backgroundColor="black";
    }
    slideBigs[3].onmouseenter=function(){
        slideBigs[this.index].style.width=55+"px";
        slideTwos[3].style.backgroundColor="red";
    }
    slideBigs[3].onmouseleave=function(){
        slideBigs[this.index].style.width=55+"px";
        slideTwos[3].style.backgroundColor="black";
    }
}
// 回到顶部
window.onload = function(){
    // var btn = document.getElementById("icon");
    var timer = null;
    var oScroll = true;
    //滚动条事件,触发时清空定时器
    window.onscroll = function(){
        if(!oScroll){
            clearInterval(timer);
        }
        oScroll = false;
    }
    slideTwos[3].onclick = function(){
        //加入定时器让他又快到慢滚动到顶部
        timer = setInterval(function(){
            //获取当前scrollTop的高度位置（兼容ie和chrom浏览器）
            var oTop = document.documentElement.scrollTop || document.body.scrollTop;
            //设置速度由快到慢
            var ispeed = Math.floor(-oTop / 20);
            document.documentElement.scrollTop = document.body.scrollTop = oTop + ispeed;
            oScroll = true;
            if(oTop == 0){
                clearInterval(timer);
            }
        },30);
    }
}





