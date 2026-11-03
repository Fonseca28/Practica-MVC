
class ListaTareas {
  constructor() {
    this.tareas = [];
    this.siguienteId = 1;
  }

  agregar(titulo) {
    const tarea = new Tarea(this.siguienteId, titulo);
    this.siguienteId = this.siguienteId + 1;
    this.tareas.push(tarea);
    return tarea;
  }

  alternar(id) {
    for (let i = 0; i < this.tareas.length; i++) {
      if (this.tareas[i].id === id) {
        this.tareas[i].completada = !this.tareas[i].completada;
      }
    }
  }

  obtenerTodas() {
    return this.tareas;
  }
}
