class Animal {
  constructor(nombre, especie, edad, img, comentarios = "") {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.img = img;
    this.comentarios = comentarios; // inicia el comentario como vacio
  }

  getNombre() {
    return this.nombre;
  }

  getEdad() {
    return this.edad;
  }

  getImg() {
    return this.img;
  }

  setComentarios(comentarios) {
    this.comentarios = comentarios;
  }

  getComentarios() {
    return this.comentarios;
  }

  getSonido() {
    return this.sonido; // Placeholder for sound representation
  }
}
export default Animal; // Exporta la clase Animal para que pueda ser utilizada en otros módulos.
