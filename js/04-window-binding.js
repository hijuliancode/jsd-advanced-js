// Window Binding
function obtenerAuto() {
  console.log(`Mi auto es de color ${this.color}`)
}

// let color = 'negro'; // undefined
// const color = 'negro'; // undefined
// var color = 'negro'; // se agrega al window vendría a ser como window.color
window.color = 'negro'

obtenerAuto()