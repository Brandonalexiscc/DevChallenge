let selectOption = [];

//Parte para el localStorage
let btn = document.querySelector('#submit');
btn.addEventListener('click', () =>{
let nombreUsuario = document.querySelector('#nameUser');
document.querySelector('#name').innerHTML = nombreUsuario.value;
window.localStorage.setItem('Usuario', nombreUsuario.value);
nombreUsuario.value = '';
let emailUsuario = document.querySelector('#email');
document.querySelector('#name').innerHTML = emailUsuario.value;
window.localStorage.setItem('email', emailUsuario.value);
emailUsuario.value = '';
});

function mostrarAlerta(){
    let user = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if ( user == '' || email == ''){
        alert('Completa los campos vacios');
    } else if (!emailRegex.test(email)){
        alert('Name o Email incorrecto');
    }else{
        let nuevaVista = document.getElementById('sumbit');
        window.location.href = 'chooseTopics.html';
        console.log(datos);
    }
}

function enable(event){
    
    let element = event.target;
    //evaluamos si el elemento tiene la clase opcion
    // si la tiene cambiamos el color de fondo al ser seleccionado
    // si ya ha sido se elimina el color de fondo
    if(selectOption === null && document.querySelector('#submitView')){
        alert("You need select an option for continue.")
    }

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
    // Recopila todas las opciones seleccionadas
    let opcionesSeleccionadas = document.querySelectorAll('.opcion.bg-purple-heart-500');
    opcionesSeleccionadas.forEach(opcion => {
        selectOption.push(opcion.value); // Agrega el valor de cada opción al arreglo selectOption
    });
    //Alemacenamos las opciones en localStorage
    window.localStorage.setItem('Topics', JSON.stringify(selectOption));
}
console.log(selectOption);

if(window.location.href === 'lastView.html'){
    let nombre = window.localStorage.getItem('Usuario');
    document.querySelector('#datosContainer').innerHTML = nombre;
}

function stepper(){
    let
}
