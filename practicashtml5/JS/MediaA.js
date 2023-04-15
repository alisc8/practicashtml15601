function MediaA() {    
    var num1 = parseFloat(document.getElementById("num1").value);  
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);  
    var Resultado= document.getElementById("Resultado");
    var suma;
    suma=(num1+num2+num3)/3;
    
    if(suma > 6.9){
        Resultado.innerHTML="La media es: "+suma+"\nEl alumno esta aprobado";
        
    }else{
        Resultado.innerHTML="La media es: "+suma+"\nEl alumno esta suspendido";
    }
}  