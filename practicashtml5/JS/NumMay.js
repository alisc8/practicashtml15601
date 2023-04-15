function NumMay() {    
    var num1 = parseInt(document.getElementById("num1").value);  
    var num2 = parseInt(document.getElementById("num2").value); 
    var Resultado; 
    if (num1 > num2) {  
        Resultado ="El numero mayor es: " + num1;
    } else if(num1 < num2){    
        Resultado="El numero mayor es: "+ num2;

    }  else{
        Resultado ="Son iguales los numeros";
    }
document.getElementById("Resultado").innerHTML = Resultado;  
}  