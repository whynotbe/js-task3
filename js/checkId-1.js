/**
 * Created by luzhaolin on 2017/3/17.
 */
window.onload = function(){
    setNumber();
    next();
    
}

function setNumber(){           //根据序号改变文字
    var a = document.getElementsByClassName("number");
    var b = document.getElementsByClassName("next");
    b[0].innerHTML ="查看"+ a[0].innerHTML +"号身份";
}



function next(){
    var i = 1 ;
    var a = document.getElementsByClassName("number")[0];
    a.innerHTML = i;

    var url  = window.location.href.split("=")[1];
    alert(url);
    var newUrl = i + ","+url;
    var next = document.getElementsByClassName("next")[0];
    next.onclick = function(){
        alert(newUrl);
        window.location.href = "checkId-2.html"+"?index="+newUrl;
    }
}
