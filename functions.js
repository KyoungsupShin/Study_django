function doSomething(){
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    var c = Number(a) + Number(b);
    document.getElementById("valueA").innerHTML = a;
    document.getElementById("valueB").innerHTML = b;
    document.getElementById("valueC").innerHTML = c;
}
function TimeNow(){
    alert(new Date());
}