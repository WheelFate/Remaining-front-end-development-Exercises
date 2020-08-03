function calc(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var operator = document.querySelector("#operator").value;
    var Calculate;
    if(operator == "add"){
        Calculate=a+b;
    }else if(operator=="min"){
        Calculate=a-b;
    }else if(operator=="div"){
        Calculate=a/b;
    }else if(operator=="mul"){
        Calculate=a*b;
    }
    document.querySelector("#result").innerHTML=Calculate;
}