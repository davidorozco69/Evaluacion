let contraseña, correo;

let formulario = document.getElementById('form-register')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    leerdatos()
})

function leerdatos(){
   
    correo = document.getElementById('correo').value;
    contraseña = document.getElementById('contraseña').value;
    alert(correo+contraseña)
    validardatos(correo,contraseña)
    guardarlocarstorage(correo,contraseña)
   
}
function validardatos (contraseña,correo){
    if(contraseña.length==0 || correo.length==0 ){
        swal("Error", "espacios en blanco", "Error");   
    }
}
function guardarlocarstorage(contraseña,correo,){
    localStorage.setItem('contraseña',contraseña);
    localStorage.setItem('Correo',correo);
     
    
}