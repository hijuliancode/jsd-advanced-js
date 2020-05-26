// This con Explicit Binding
// .call es un metodo que existe en todas las funciones
// .call me va a permitir invocar o llamar especificando en que contexto esta función va a ser ejecutada
// .call, una de las limitaciones es que cuando le pasamos un arreglo, tenemos que pasar cada una de las posiciones
// .apply, no tiene esta limitación, le podemos pasar un arreglo

function persona(elm1, elm2) {
  console.log(`Hola soy ${this.nombre} y me gusta el ${elm1} y el ${elm2}`)
}

const informacion = {
  nombre: 'Julian',
  trabajo: 'Programador'
}

const generosMusicales = ['Heavy Metal', 'Rock', 'Hardcore']

// explicit binding con .call, cuando pasas arreglo, debes colocar todas las posiciones
persona.call(informacion, generosMusicales[0], generosMusicales[1])

// explicint binding con .apply (si toma un arreglo)
persona.apply(informacion, generosMusicales) // reconoce automaticamente los elementos, en base al parametro que se le pasa

// explicit binding con .bind, la diferencía es que nos va a crear una nueva función
const nuevaFN = persona.bind(informacion, generosMusicales[0], generosMusicales[1])
nuevaFN()