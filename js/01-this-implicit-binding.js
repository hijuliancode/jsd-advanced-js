// This, implicit Binding : Nos dice en que contexto se ejecuta o se accede a los valores

const usuario = {
  nombre: 'Julian',
  edad: 28,
  presentacion: function() {
    console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años`)
  },
  mascota: {
    nombre: 'Ash',
    edad: 2,
    presentacion: function() {
      console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años`) // El this no pierde la referencía
    }
  }
}

usuario.presentacion()
usuario.mascota.presentacion()
