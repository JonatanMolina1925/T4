function verificarContra(){
    var caracContra = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    var pass = document.getElementById("contra1");
    var conpass = document.getElementById("contra2");
    alert
    if(pass.value && conpass.value){
        if (caracContra.test(pass.value) && caracContra.test(conpass.value))
        {
            if (pass.value != conpass.value) {
                alert("Las contraseñas deben de coincidir.");
                return false;
            } else {
                alert("Las contraseñas coinciden.");
                document.formulario1.submit();
                return true; 
            }
            
        }
        else{
            alert("El campo contraseña no admite espacios, caracteres con acentos ni ñ.")
            alert("La contraseña debe tenr una longitud de 8 a 16 caracteres, con al menos una mayúscula, una minúscula y un número")
            pass.focus();
            return false;
        }  
    } else{
        alert("Escribe una contraseña y confírmala.")
        return false;
    }
}
function verificarNombre(){
    var caracNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var nombre = document.getElementById("nombre");
    if(nombre.value){
        if (!caracNombre.exec(nombre.value))
        {
            alert("El campo nombre solo admite letras y espacio.")
            nombre.focus();
            return false;
        }
        else{
            verificarApellido();
        }
    }else{
        alert("Ingresa tu(s) nombre(s), por favor.");
        return false;
    }   
}

function verificarApellido(){
    var caracNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var apellidos = document.getElementById("apellidos");
    if(apellidos.value){
        if (!caracNombre.exec(apellidos.value))
        {
            alert("El campo apellidos solo admite letras y espacio.")
            apellidos.focus();
            return false;
        }
        else{
            verificarCorreo();
        }
    } else{
        alert("Ingresa tus apellidos, por favor.");
        return false;
    } 
}

function verificarCorreo(){
    var caracCorreo=/^\w+@(\w+\.)+\w{2,4}$/;
    var correo = document.getElementById("correo");
    if(correo.value){
        if (!caracCorreo.exec(correo.value))
        {
            alert("El campo correo acepta números, letras, punto y @.")
            correo.focus();
            return false;
        }
        else{
            verificarContra();
        }
    }else{
        alert("Ingresa tu correo, por favor.");
        return false;
    }
}
