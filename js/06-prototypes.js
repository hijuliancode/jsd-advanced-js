// Classes & Prototypes
function Playlist(nombre) {
  this.nombre = nombre
}
Playlist.prototype.play = function() {
  console.log(`Reproduciendo ${this.nombre} 🎶`)
}
Playlist.prototype.eliminar = function() {
  console.log(`Eliminando ${this.nombre} 🗑`)
}

const playlist1 = new Playlist('Music 60s')
const playlist2 = new Playlist('Metal 90s')

console.log(playlist1)
console.log(playlist2)

playlist1.play()
playlist2.play()

playlist1.eliminar()
playlist2.eliminar()