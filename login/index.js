var datos = [];


function mostrarAlerta(){
    let user = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if ( user == '' || email == ''){
        alert('Completa los campos vacios');
    } else if (!emailRegex.test(email)){
        alert('Name o Email incorrecto');
    }else{
        datos.push(`Nombre:${user}`);
        alert(`Hola ${user} Bienvenido. ` );
        let nuevaVista = document.getElementById('sumbit');
        window.location.href = 'chooseTopics.html';
        console.log(datos);
    }
}


mostrarAlerta();
function enable(event){
    let element = event.target;
    //evaluamos si el elemento tiene la clase opcion
    // si la tiene cambiamos el color de fondo al ser seleccionado
    // si ya ha sido se elimina el color de fondo
    if(element.classList.contains('opcion')){
        if(element.classList.contains('bg-purple-heart-500')){ // si el color de fondo es el morado
            element.classList.remove('bg-purple-heart-500') // elimina el color morado que tiene de fondo 
            element.classList.add('bg-ebony-clay-500') // cambia el color a gris oscuro
            element.classList.remove('text-white');

        }else{
            element.classList.remove('bg-white') // regresa a su color original si se vuelve a dar click
            element.classList.add('bg-purple-heart-500') // regresa a su color original si se vuelve a dar click
            element.classList.add('text-white');
        }

    }
}
