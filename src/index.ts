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