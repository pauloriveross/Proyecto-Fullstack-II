function guardarUsuario (){
    var nombre = document.getElementById("regnombre").value;
    var apellido = document.getElementById("regapellido").value;
    var correo = document.getElementById("regcorreo").value;
    var password = document.getElementById("regpassword").value;
    var fechaIngresada = document.getElementById("regfecha").value;
    var cuponIngresado = document.getElementById("regcupon").value;



    var cuponValido = "FELICES50";


    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const mensajeDiv = document.getElementById('mensajeRegistrar');



    if (nombre =='' || nombre.length <3 ) {
        alert("El nombre no puede estar vacio y debe ser mayor a 3 caracteres")
        
    }else if (apellido =='' || apellido.length<3){
        alert("El apellido no puede estar en blanco y debe ser mayor a 3 caracteres")

    }else if (!regexCorreo.test(correo)){
        alert("El correo no cumple con el formato correcto")


    }else if (!regexPassword.test(password)) {
        alert("La contraseña debe tener como minimo 6 caracteres , incluir una letra y un numero")


    }else if(cuponIngresado !== "" && cuponIngresado !== cuponValido){
        mensajeDiv.style.color = 'red';
        mensajeDiv.innerText = "Cupón no válido";
        return

    }else if (fechaIngresada ===''){
        alert("Debes seleccionar tu fecha de nacimiento")
        return
    }else if (!validarFecha(fechaIngresada)) {
        return

    } else {

        let tiene_descuento =(cuponIngresado === cuponValido);
        const usuario_nuevo = {
            "nombre": nombre,
            "apellido":apellido,
            "correo": correo,
            "password":password, 
            "tiene descuento" : tiene_descuento,
            "fechaNacimiento" : fechaIngresada
        }
    guardar(usuario_nuevo);
    document.getElementById('registrarForm').reset();
    const modal = document.getElementById("registrarModal");
    const modalIns = bootstrap.Modal.getInstance(modal);
    modalIns.hide()
    }
}


const llave ="pasteleria_mil_sabores";
function guardar(usuario) {
    var storage = localStorage.getItem(llave)
    var storage_parse = storage ? JSON.parse(storage) : [];
    var correoExistente = storage_parse.find(u => u.correo === usuario.correo);
    if (correoExistente) {
        alert("El correo ya se encuentra registrado");
        return;
    }
    storage_parse.push(usuario);
    localStorage.setItem(llave, JSON.stringify(storage_parse));
    alert("Registro exitoso , ya puedes ingresar a tu cuenta")
}



function validarFecha(stringFecha) {
    
    const anioNac = parseInt(stringFecha.substring(0, 4));


    if (isNaN(anioNac)) {
        alert("Fecha no válida");
        return false;
    }
    const anioActual = new Date().getFullYear();
    const maximo = anioActual - 90;
    const minimo = anioActual - 10;

    if (anioNac < maximo ) {
        alert("La fecha de nacimiento supera el limite de 90 años de antiguedad ")
        return false;
    }

    if (anioNac > minimo) {
        alert("Debes tener al menos 10 años para poder registrarte en Pasteleria Mil Sabores")
        return false;
        
    }

    return true;
    
}