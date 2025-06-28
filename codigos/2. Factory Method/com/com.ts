interface Livro {
  ler(): void;
}

class LivroFisico implements Livro {
  ler(): void {
    console.log("Lendo livro físico: folheando páginas.");
  }
}

class LivroDigital implements Livro {
  ler(): void {
    console.log("Lendo livro digital: deslizando na tela.");
  }
}

abstract class LojaDeLivros {
  abstract criarLivro(): Livro;

  venderLivro(): void {
    const livro = this.criarLivro();
    livro.ler();
  }
}

class LojaFisica extends LojaDeLivros {
  criarLivro(): Livro {
    return new LivroFisico();
  }
}

class LojaOnline extends LojaDeLivros {
  criarLivro(): Livro {
    return new LivroDigital();
  }
}

const loja1 = new LojaFisica();
const loja2 = new LojaOnline();

loja1.venderLivro();
// Lendo livro físico
loja2.venderLivro();
// Lendo livro digital