// Composition
// La composición es básicamente tener una serie de funciones
// y asignarlas al objeto deseado.

const obtenerNombre = (info) => ({
  mostrarNombre() {
    console.log(`Nombre: ${info.nombre}`)
  }
})
const guardarEmail = (info) => ({
  email(email) {
    console.log(`Guardando email en ${info.nombre}`)
    info.email = email
  }
})
const obtenerEmail = (info) => ({
  mostrarEmail() {
    console.log(`Email: ${info.email}`)
  }
})
const obtenerEmpresa = (info) => ({
  mostrarEmpresa() {
    console.log(`Empresa: ${info.empresa}`)
  }
})
const obtenerPuesto = (info) => ({
  mostrarPuesto() {
    console.log(`Puesto: ${info.puesto}`)
  }
})

function Cliente(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa
  }
  return Object.assign( // es una función que es utilizada para únir el objecto, con las funciones que hemos declarado afuera
    info,
    obtenerNombre(info), // De esta manera se hace referencia a obtenerNombre, y se ata al objeto, y podemos acceder a mostrarNombre
    obtenerEmail(info),
    guardarEmail(info),
    obtenerEmpresa(info)
  )
}
function Empleado(nombre, email, puesto) {
  let info = {
    nombre,
    email,
    puesto
  }
  return Object.assign(
    info,
    obtenerNombre(info),
    obtenerEmail(info),
    guardarEmail(info),
    obtenerPuesto(info)
  )
}

const cliente = Cliente('Juan', null, 'Udemy')
cliente.mostrarNombre()
cliente.email('cliente@cliente.com')
cliente.mostrarEmail()
cliente.mostrarEmpresa()

const empleado = Empleado('Pedro', null, 'Programador')
empleado.mostrarNombre()
empleado.email('cliente@cliente.com')
empleado.mostrarEmail()
empleado.mostrarPuesto()
