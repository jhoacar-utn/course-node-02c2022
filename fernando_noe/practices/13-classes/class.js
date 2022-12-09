/** Las clases nos permiten crear una cantidad indefinida de objetos con la misma estructura */

class Estudiante {
  name;

  study() {
    console.log(`${this.name}está estudiando`);
  }

  constructor(name) {
    this.name = name;
  }
}

const sofia = new Estudiante('Sofia'); // Esto está MAL, a menos que use el Constructor
console.log(sofia);

const pedro = new Estudiante();
pedro.name = 'Pedro';
console.log(pedro);
