
class TareaVista {
  constructor() {
    this.formulario = document.getElementById('formulario');
    this.input = document.getElementById('titulo');
    this.lista = document.getElementById('lista');
  }

  obtenerTitulo() {
    return this.input.value.trim();
  }

  limpiarFormulario() {
    this.input.value = '';
  }

  obtenerIdDelClic(evento) {
    const item = evento.target.closest('li[data-id]');
    if (item === null) {
      return null;
    }
    return Number(item.dataset.id);
  }

  mostrarTareas(tareas) {
    this.lista.innerHTML = '';

    if (tareas.length === 0) {
      const vacio = document.createElement('li');
      vacio.className = 'vacio';
      vacio.textContent = 'No hay tareas todavía.';
      this.lista.appendChild(vacio);
      return;
    }

    for (let i = 0; i < tareas.length; i++) {
      const li = document.createElement('li');
      li.dataset.id = tareas[i].id;
      li.textContent = tareas[i].titulo;
      if (tareas[i].completada) {
        li.classList.add('completada');
      }
      this.lista.appendChild(li);
    }
  }
}
