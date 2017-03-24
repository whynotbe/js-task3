/**
 * Created by luzhaolin on 2017/3/24.
 */

window.onload = function()
{
    showid();
    next();
    close();
}

function showid(){
    var url = window.location.href.split("=")[1];
    var array = url.split(",");
    array.shift();
    var killerNum = array.shift();
    var civilNum = array.shift();
    var killers = array.splice(0,killerNum);
    var civil = array.splice(0,civilNum);
    var wholeNum = parseInt(killerNum) + parseInt(civilNum);

    for(var i = 1;i <= wholeNum;i++){      //根据玩家数量,创建角色头像板元素
        var list = document.getElementsByClassName("list")[0];
        var id = document.createElement("div");
        id.setAttribute("class","id");
        var order = document.createElement("div");
        if(killers.indexOf(i.toString())>=0){
            order.innerHTML = "杀手";      //判断角色身份
        }
        else if (civil.indexOf(i.toString()) >=0){
            order.innerHTML = "平民";
        }
        else{
            order.innerHTML = "未知"
        }

        var num2 = document.createElement("div");
        num2.innerHTML = i + "号";    //判断角色序号
        order.setAttribute("class","order");
        num2.setAttribute("class","num2");
        id.setAttribute("class","id");
        id.appendChild(order);   //添加角色身份
        id.appendChild(num2);    //添加角色序号
        list.appendChild(id);  //添加角色头像板元素
    }

}

function next(){
    var next = document.getElementsByClassName("next")[0];
    next.onclick = function(){
        alert("敬请期待");
    }

}
function close(){
    var close =document.getElementsByClassName("close")[0];
    close.onclick = function(){
        window.location.href="1-main.html";
    }
}