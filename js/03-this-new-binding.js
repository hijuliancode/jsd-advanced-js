// New Binding

function Automovil(modelo, color) {
  this.modelo = modelo
  this.color = color
}

// Una vez que se cree un nuevo objeto, se crea con "new" Automovil, es por eso que se le conoce como new binding
const auto = new Automovil('Camaro', 'Azul')
console.log(auto);
