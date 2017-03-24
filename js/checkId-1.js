/**
 * Created by luzhaolin on 2017/3/17.
 */
window.onload = function(){
    
    showId();
    back();
    close();
    
}



function showId(){
    var url  = window.location.href.split("=")[1];        //获取url里的参数数组,参数组依次是玩家序号,杀手人数,平民人数,杀手序号,平民序号
    var i = url.split(",")[0];
    var a = document.getElementsByClassName("number")[0];
    a.innerHTML = i;
    var next = document.getElementsByClassName("next")[0];
    next.innerHTML = "查看"+a.innerHTML+"号身份"; 
    next.onclick = function(){
        window.location.href = "4-checkId-2.html"+"?index="+url;    //给显示身份的页面传递参数,参数不变.
    }
}

function back(){
    var back =document.getElementsByClassName("back")[0];
    back.onclick = function(){
        window.history.back(-1);
    }
}

function close(){
    var close =document.getElementsByClassName("close")[0];
    close.onclick = function(){
        window.location.href="1-main.html";
    }
}