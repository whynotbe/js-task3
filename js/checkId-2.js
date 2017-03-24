/**
 * Created by luzhaolin on 2017/3/23.
 */
window.onload = function(){
    nextPlayer();
    back();
    close
}


function nextPlayer(){
    //给页面设置序号
    var a = window.location.href.split("=")[1];
    var array  = a.split(",");
    var index = array[0];
    var num = document.getElementsByClassName("number")[0];
    num.innerHTML = index;   
    var nextNum = parseInt(index)+1;

    //判断并显示玩家身份
    var id = document.getElementsByClassName("identity")[0];
    array.shift();
    var killerNum = array.shift();
    var civilNum = array.shift();
    var wholeNum = parseInt(killerNum) + parseInt(civilNum);
    var killers = array.splice(0,killerNum);
    var civil = array.splice(0,civilNum);
    if(killers.indexOf(index) >=0 ){
        id.innerHTML = "杀手";
    }
    else if(civil.indexOf(index)>=0){
        id.innerHTML = "平民";
    }
    else{
        id.innerHTML = "未知";
    }

    //判断下一个页面是查看身份还是法官页面,参数传递给下个页面
    var nextPlayer = document.getElementsByClassName("next")[0];
    if(nextNum <=wholeNum){
        nextPlayer.innerHTML = "隐藏并传递给"+nextNum+"号玩家";
    }
    else{
        nextPlayer.innerHTML = "法官查看";
    }
    nextPlayer.onclick = function(){

        var newUrl = a.replace(index,nextNum);  //string好像没有直接修改指定位置字符的函数
        window.location.href ="3-checkId-1.html"+"?index="+newUrl; 
        
        if(nextNum <= wholeNum){
            window.location.href ="3-checkId-1.html"+"?index="+newUrl;
        }
        else{
            window.location.href="5-judgeView.html"+"?index="+newUrl;
        }
        
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