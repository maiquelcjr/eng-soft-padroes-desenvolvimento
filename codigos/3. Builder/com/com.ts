class Livro {
  titulo?: string;
  autor?: string;
  conteudo?: string;
  isbn?: string;

  exibirInfo(): void {
    console.log("Livro:", this.titulo, "-", this.autor, "-", this.isbn);
  }
}

class LivroMontador {
  private livro: Livro;

  constructor() {
    this.livro = new Livro();
  }

  setTitulo(titulo: string): LivroMontador {
    this.livro.titulo = titulo;
    return this;
  }

  setAutor(autor: string): LivroMontador {
    this.livro.autor = autor;
    return this;
  }

  setConteudo(conteudo: string): LivroMontador {
    this.livro.conteudo = conteudo;
    return this;
  }

  setISBN(isbn: string): LivroMontador {
    this.livro.isbn = isbn;
    return this;
  }

  construir(): Livro {
    return this.livro;
  }
}

// Teste
const livroCompleto = new LivroMontador()
  .setTitulo("Diário de um Banana")
  .setAutor("Jeff Kinney")
  .setISBN("978-8576831309")
  .setConteudo("Capítulo 1: A vida nada fácil de um garoto na escola...")
  .construir();

livroCompleto.exibirInfo();
// Livro: Diário de um Banana - Jeff Kinney - 978-8576831309