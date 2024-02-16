function mostrarAlerta(){
    let user = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let datos = [];
    if ( user == '' || email == ''){
        alert('Completa los campos vacios');
    } else if (!emailRegex.test(email)){
        alert('Name o Email incorrecto');
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

let selectores = [document.getElementById('selection1'), document.getElementById('selection2'), document.getElementById('selection3'),];

function enable(event){
    let element = event.target;
    //evaluamos si el elemento tiene la clase opcion
    // si la tiene cambiamos el color de fondo al ser seleccionado
    // si ya ha sido se elimina el color de fondo
    if(element.classList.contains('opcion')){
        if(element.classList.contains('bg-purple-heart-500')){ // si el color de fondo es el morado
            element.classList.remove('bg-purple-heart-500') // regresa a su color original si se vuelve a dar click
            element.classList.add('bg-ebony-clay-500') // regresa a su color original si se vuelve a dar click
        }else{
            element.classList.remove('bg-white') // regresa a su color original si se vuelve a dar click
            element.classList.add('bg-purple-heart-500') // regresa a su color original si se vuelve a dar click
        }

    }
}

