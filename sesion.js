
const llave1 ="pasteleria_mil_sabores";
function iniciar() {
    const correoIngresado = document.getElementById("logincorreo").value;
    const passwordIngresado = document.getElementById("loginpassword").value;


    var storage = localStorage.getItem(llave1)
    var storage_parse = storage ? JSON.parse(storage) : [];




    if (storage_parse.length == 0) {
    alert("No hay usuarios registrados")
    return;
    }   


    const usuarioEncontrado = storage_parse.find(function(u){
        return u.correo === correoIngresado && u.password === passwordIngresado;
    });

    if (usuarioEncontrado) {
        alert("Bienvenido Nuevamente a Pasteleria Mil Sabores")
         document.getElementById("loginForm").reset();
        
    }else {
        alert("Error en las credenciales")
    }


    document.getElementById('loginForm').reset();
    const modalLogin = document.getElementById("loginModal");
    const modalLog = bootstrap.Modal.getInstance(modalLogin);
    modalLog.hide()
}