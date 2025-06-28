class Biblioteca {
  private static instancia: Biblioteca;
  private livros: string[] = [];

  private constructor() {}

  public static getInstancia(): Biblioteca {
    if (!Biblioteca.instancia) {
      Biblioteca.instancia = new Biblioteca();
    }
    return Biblioteca.instancia;
  }

  public adicionarLivro(titulo: string): void {
    this.livros.push(titulo);
  }

  public listarLivros(): void {
    console.log("Livros na biblioteca:", this.livros);
  }
}

const biblioteca1 = Biblioteca.getInstancia();
const biblioteca2 = Biblioteca.getInstancia();

biblioteca1.adicionarLivro("React Aprenda Praticando");
biblioteca2.adicionarLivro("Lógica de Programação e Algoritmos com JavaScript");

biblioteca1.listarLivros();
// ["React Aprenda Praticando", "Lógica de Programação e Algoritmos com JavaScript"]
biblioteca2.listarLivros();
// Mesmo resultado

console.log(biblioteca1 === biblioteca2);
// Irá retornar true, pois é a mesma instância.