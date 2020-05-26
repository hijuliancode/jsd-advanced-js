// Prototype, herencia
function Playlist(nombre) {
  this.nombre = nombre
}
Playlist.prototype.play = function() {
  console.log(`Reproduciendo ${this.nombre} 🎶`)
}
Playlist.prototype.eliminar = function() {
  console.log(`Eliminando ${this.nombre} 🗑`)
}

/** Herencia */
function Cancion(nombre, genero) {
  Playlist.call(this, nombre); // Hacer un llamado a los atributos del objeto padre
  this.genero = genero;
}
// Heredar los metodos
Cancion.prototype = Object.create(Playlist.prototype) // Clonando el prototipo del padre

const cancion = new Cancion('Whiskey in the Jar', 'Heavy Metal')

console.log(cancion);
cancion.play()
cancion.eliminar()


const playlist1 = new Playlist('Music 60s')
console.log(playlist1)
playlist1.play()
playlist1.eliminar()
