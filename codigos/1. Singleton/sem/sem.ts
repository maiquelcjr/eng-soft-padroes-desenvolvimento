class Biblioteca {
  private livros: string[] = [];
    static instancia: Biblioteca;

  public adicionarLivro(titulo: string): void {
    this.livros.push(titulo);
  }

  public listarLivros(): void {
    console.log("Livros na biblioteca:", this.livros);
  }
}

// Criação de duas instâncias
const biblioteca1 = new Biblioteca();
const biblioteca2 = new Biblioteca();

biblioteca1.adicionarLivro("React Aprenda Praticando");
biblioteca2.adicionarLivro("Lógica de Programação e Algoritmos com JavaScript");

biblioteca1.listarLivros();
// ["React Aprenda Praticando"]

biblioteca2.listarLivros();
// ["Lógica de Programação e Algoritmos com JavaScript"]

console.log(biblioteca1 === biblioteca2);
// Irá retornar false, pois são instâncias diferentes