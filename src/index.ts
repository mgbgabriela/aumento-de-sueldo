/*Ejercicio – Aumento de Sueldo
• Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:
58
Sueldo Actual Sueldo con Aumento
0 - 15.000 $ 20%
15.001 - 20.000 $ 10%
20.001 - 25.000 $ 5%
Más de 25.000 $ No hay aumento
• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre*/



let sueldo = document.getElementById("dato1");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo1.innerHTML = "Ingrese sueldo";
//btnEnviar.addEventListener("click", () => {
btnEnviar.addEventListener("click", () => {
    let sueldo : number = dato1.value;
    let sueldoConAumento : number = 0;
    if (0<sueldo && sueldo <=15000){
      sueldo=sueldo + (sueldoConAumento*0.2);
      console.log("Su salario ha tenido un aumento del 20%");
    }else if(15001<= sueldo && sueldo <= 20000){
      sueldo=sueldo+(sueldoConAumento*0.1);
      console.log("Su salario ha tenido un aumento del 10%");
    }else if (20001<= sueldo && sueldo <= 25000){
      sueldo=sueldo+(sueldoConAumento*0.05);
      console.log("Su salario ha tenido un aumento del 5%");
    }else if (25000<= sueldo){
      console.log("Su salario no ha tenido aumento");
    }
  
});
