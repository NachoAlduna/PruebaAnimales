import Animal from "./Animal.js"; // Importa la clase Animal desde el archivo Animal.js

const audioPlayer = document.getElementById("player"); // Obtiene el elemento de audio del documento HTML

// Clase para representar un León, que extiende la clase Animal.
class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
  }

  Rugido() {
    console.log(this.getSonido()); // Imprime el sonido del león en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del león.
    audioPlayer.play(); // Reproduce el sonido del león.
  }
}
class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
  }

  Aullido() {
    console.log(this.getSonido()); // Imprime el sonido del Lobo en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del Lobo.
    audioPlayer.play(); // Reproduce el sonido del Lobo.
  }
}
class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
  }

  Grunido() {
    console.log(this.getSonido()); // Imprime el sonido del Oso en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del Oso.
    audioPlayer.play(); // Reproduce el sonido del Oso.
  }
}
class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
  }

  Siseo() {
    console.log(this.getSonido()); // Imprime el sonido de la Serpiente en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido de la Serpiente.
    audioPlayer.play(); // Reproduce el sonido del Serpiente.
  }
}
class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
  }

  Chillido() {
    console.log(this.getSonido()); // Imprime el sonido del Aguila en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del Aguila.
    audioPlayer.play(); // Reproduce el sonido del Aguila.
  }
}
export { Leon, Lobo, Oso, Serpiente, Aguila };
