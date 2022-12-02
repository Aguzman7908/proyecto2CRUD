
// let usuarios = [];

/* Evento de javascript que se ejecuta cuando el DOM se termina de cargar*/

let usuarioActual = null;
  
    document.addEventListener('DOMContentLoaded', function(event){
   //console.log('Contenido cargado')

    let hayInfo = localStorage.getItem('usuarios')
    if (!hayInfo) localStorage.setItem('usuarios', JSON.stringify([]))

    let lista =  document.getElementById('lista')
    let arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'))
    let items =  arrayUsuarios.map ((e,index)  => { // el map (va a recorrer por cada elemento del array y va ejecutar la funcion que indiquemos en el paranetro) nos regresa una e  para indicar el usuario y una variable index para indicar el indice
        return `<tr>
                <td> ${e.nombre}</td>
                <td> ${e.apellido}</td>
                <td> ${e.email}</td>
                <td><img src="${e.imagen}"></td>
                <td><button onclick="eliminarUsuario(${index})"> Eliminar </button>
                    <button onclick="editarUsuario(${index}, '${e.nombre}', '${e.apellido}','${e.email}','${e.imagen}')">Editar Usuario </button>
                </td>
        </tr>`
        
    })
    
    lista.innerHTML = items.join('')
    //document.body.appendChild(lista)
})

function nuevoUsuario(){
    let inputNombre = document.getElementById('inputNombre').value
    let inputApellido = document.getElementById('inputApellido').value
    let inputEmail = document.getElementById('inputEmail').value
    let inputImagen = document.getElementById('inputImagen').value
   
   
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios'))
    //usuariosGuardados.push({nombre: inputNombre}, {apellido: inputApellido},{email: inputEmail})
    usuariosGuardados.push({nombre:inputNombre, apellido: inputApellido, email:inputEmail, imagen:inputImagen})
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados))
    window.location.reload()
}

function eliminarUsuario(index){
    console.log(index)
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) // Tomamos ekl contenido de Localstorage con la llave usuario y parseamos su contenido con JSONparse o decodificamos el contenido
    usuariosGuardados.splice(index,1)
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados))  // El array de usuarios guardados lo convertimos a string con JSSON y lo guardamos en el local storage con la llave de usuarios
    window.location.reload() // actualiza la pagina

}


function editarUsuario(index, nombre, apellido, email,imagen) {
    usuarioActual = index
    document.getElementById('inputNombre').value = nombre
    document.getElementById('inputApellido').value = apellido
    document.getElementById('inputEmail').value = email
    document.getElementById('inputImagen').value = imagen
   

}

function actualizarUsuario() {
    //document.getElementById('inputNombre').value = nombre
    let nom = document.getElementById('inputNombre').value
    let ape = document.getElementById('inputApellido').value
    let ema = document.getElementById('inputEmail').value
    let img = document.getElementById('inputImagen').value

    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios'))
    usuariosGuardados[usuarioActual].nombre = nom
    usuariosGuardados[usuarioActual].apellido = ape
    usuariosGuardados[usuarioActual].email = ema
    usuariosGuardados[usuarioActual].imagen = img
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados))
    window.location.reload()
}


/* Actualizar
1.- Agregar un boton al lado del eliminarUsuario
2.- Tomar el elemento del input por el ID (linea 24) lo queesta en la linea 42 hecho
3.- La funcion de modificar  va a tomar un argumento que va a estabnlecer en el bvalor de inputnombre hecho en la linea 42
4.- Tener un boton que se tenga un botpon al lado de actualizar y solamete servira para actualizar

5.- DEclarar una variable global llamada usuarioActual, y que esta nos servira para guardar el usuario que se esta modificando actualmente

6.- Falta  responsivo, css
7.- Poner mas campos
8.- Poner 
*/

