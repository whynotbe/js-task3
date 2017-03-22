/**
 * Created by luzhaolin on 2017/3/13.
 */
window.onload = function(){
    getNumber(); //分配杀手组与平民组,并更改数量. 如果输入不合法,弹出提示
    submit(); //为"去发牌"按钮添加点击事件. 点击转到查看身份-1界面.
}


function getNumber(){
    var number = document.getElementById("input");
    var num ;
    var tri=document.getElementsByClassName("tri");
    tri[0].onclick=function(){
        window.location.href = "index-js.html";
    }
    number.onblur=function(){
        num = number.value;
        if(parseInt(num) == num){
            if(num>3&&num<19)
            {
                var k = allocate(num);
                var players = [];
                for(var p = 1;p <=num ;p++){
                    players.push(p);
                }
                var killers = shuffle(k,players);
                

            }
            else{
                alert("请输入4~18的整数!");
                number.value = 8;
            }
        }
        else {
            alert("请输入4~18的整数");
            number.value = 8;
        }
    }
}

function allocate(a){
    var killerNumber = document.getElementById("killerNumber");
    var civilNumber = document.getElementById("civilNumber");
    var killerNum = Math.floor(a/4);
    var civilNum = a - killerNum;
    var killer = "杀手"+killerNum+"人";
    var civil = "平民" +civilNum + "人";
    killerNumber.innerHTML = killer;
    civilNumber.innerHTML = civil;
    return killerNum;
}

function    shuffle(x,array){
    
    var c = [];
    for(i = 0 ;i < x ; i++){
        var order = Math.floor(Math.random()*(array.length));
        var a = array.splice(order,1);
        c.push(a);
    }
    return c;
    
}

function submit(){
    var button = document.getElementsByClassName("submit");
    button[0].onclick = function(){
        window.location.href = "checkIdentity-1.html";
    }
}