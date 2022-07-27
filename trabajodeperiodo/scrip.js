let nombre, unidades, salario, categoria
const o0 = 1500000;
const o1 = 2000000;
const o2 = 2100000;
const o3 = 2200000;
const o4 = 2400000;
const P1 = 0.05;
const P2 = 0.07;
const P3 = 0.1;
const P4 = 0.15;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    leer_datos();
    

})

function leer_datos(){
    nombre= document.getElementById("nombre").value
    unidades = document.getElementById("unidades").value
    categoria = document.getElementById("categoria").value
    calcular()
    
    mensaje();
    
}

function calcular(){
    if(categoria==1){
        if(unidades > 50){
            salario = o1 + (o1*P1)
        }
        else{
            salario = o0+(o0*P1)
        }
    }
    else if(categoria==2){
        if(unidades > 50){
            salario = o2+(o2*P2)
        }
        else{
            salario = o0+(o0*P2)
        }
    }
    else if(categoria==3){
        if(unidades > 50){
            salario = o3+(o3*P3)
        }
        else{
            salario = o0+(o0*P3)  
        }
    }
    else if(categoria==4){
        if(unidades > 50){
            salario = o4 + (o4*P4)
        }
        else{
            salario = o0 +(o0*P4)
        }
    }
}

function mensaje(){
    document.getElementById("salario").value = salario
}

