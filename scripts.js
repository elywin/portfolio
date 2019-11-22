 let num1 = document.getElementById("num1").value;
 let num2 = document.getElementById("num2").value;
 let tapButton = document.getElementById("clickMe");


tapButton.onclick = ()=>{
    multi =()=>{
        result = num1*num2;
        alert(result);
    };
};