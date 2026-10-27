
class TareaController {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;

    this.escucharEventos();
    this.actualizarVista();
  }

  escucharEventos() {
    const controlador = this;

    this.vista.formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();
      controlador.agregarTarea();
    });

    this.vista.lista.addEventListener('click', function (evento) {
      const id = controlador.vista.obtenerIdDelClic(evento);
      if (id !== null) {
        controlador.alternarTarea(id);
      }
    });
  }

  agregarTarea() {
    const titulo = this.vista.obtenerTitulo();
    if (titulo !== '') {
      this.modelo.agregar(titulo);
      this.vista.limpiarFormulario();
      this.actualizarVista();
    }
  }

  alternarTarea(id) {
    this.modelo.alternar(id);
    this.actualizarVista();
  }

  actualizarVista() {
    this.vista.mostrarTareas(this.modelo.obtenerTodas());
  }
}
