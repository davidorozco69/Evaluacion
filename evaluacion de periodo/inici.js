let correo, contraseña;

let formulario = document.getElementById('form-register')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    leerdatos()
})

function leerdatos() {
    correo = document.getElementById('correo').value;
    contraseña = document.getElementById('contraseña').value;
    alert(correo + contraseña)
    validardatos(correo, contraseña)

}
function validardatos(contraseña, correo) {
    if (contraseña.length == 0 || correo.length == 0) {
        swal("Error", "espacios en blanco", "Error");
    }
    listaDatos(correo, contraseña)
    window.location.href = "https://www.iesantaelena.edu.co/"
}
function listaDatos(correo, contraseña) {
    let correoUs = localStorage.getItem('correo');
    let contraseñaUs = localStorage.getItem('Contraseña');
    alert(correoUs+contraseñaUs)

    if (correoUs == correo && contraseñaUs == contraseña) {
        swal("Error", "espacios en blanco", "Error");
       
        window.location.href = "https://www.iesantaelena.edu.co/"

    } else {
       
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
    }

}