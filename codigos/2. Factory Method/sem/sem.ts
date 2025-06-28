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

class LojaFisica {
  venderLivro(): void {
    const livro = new LivroFisico(); // criação direta
    livro.ler();
  }
}

class LojaOnline {
  venderLivro(): void {
    const livro = new LivroDigital(); // criação direta
    livro.ler();
  }
}

const loja1 = new LojaFisica();
const loja2 = new LojaOnline();

loja1.venderLivro();
// Lendo livro físico
loja2.venderLivro();
// Lendo livro digital