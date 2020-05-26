// Classes & Prototypes

class Playlist {
  constructor(nombre) {
    this.nombre = nombre;
  }
  play() {
    console.log(`Reproduciendo ${this.nombre} 🎶`)
  }
  eliminar() {
    console.log(`Eliminando ${this.nombre} 🗑`)
  }
}

const playlist1 = new Playlist('Music 60s')
const playlist2 = new Playlist('Metal 90s')

console.log(playlist1);
console.log(playlist2);

playlist1.play()
playlist2.play()

playlist1.eliminar()
playlist2.eliminar()