// Event Loop // Modelo de concurrencia y loop de eventos

console.log('Yo me mostraré primero');

setTimeout(() => {
  console.log('Yo me mostraré segundo (setTimeOut)');
}, 0);

console.log('Yo me mostraré tercero');

setTimeout(() => {
  console.log('Yo cuarto (setTimeOut)');
}, 0);

new Promise((res) => { // El promise tiene prioridad sobre la cola de tareas
  res('Yo soy un promise')
}).then(console.log)

console.log('Yo quinto');
