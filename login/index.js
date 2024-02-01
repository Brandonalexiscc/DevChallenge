function mostrarAlerta(){
    let user = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if ( user == '' || email == ''){
        alert('Completa los campos vacios');
    } else if (!emailRegex.test(email)){
        alert('Favor de ingresar un correo valido');
    }else{
        alert('Bienvenido ' + user);
        let nuevaVista = document.getElementById('sumbit');
        window.location.href = 'chooseTopics.html';
    }

}