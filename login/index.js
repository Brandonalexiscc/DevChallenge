function mostrarAlerta(){
    let user = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let datos = [];
    if ( user == '' || email == ''){
        alert('Completa los campos vacios');
    } else if (!emailRegex.test(email)){
        alert('Favor de ingresar un correo valido');
    }else{
        alert(`Hola ${user} Bienvenido. ` + datos);
        let nuevaVista = document.getElementById('sumbit');
        window.location.href = 'chooseTopics.html';
        datos.push(user, email);
    }
}
/**
 * The function `mutipleSelection` creates an empty array called `selection` and pushes the element
 * with the id 'selection1' into the array if it exists.
 */

function enable(){
    if(document.getElementById('selection1') != null){
        let selection = [];
        selection.push(document.getElementById('selection1'));
        //cambiar el background de la seleccion a morado
        document.getElementById('selection1').style.backgroundColor = 'purple';
    }
}

console.log(enable());