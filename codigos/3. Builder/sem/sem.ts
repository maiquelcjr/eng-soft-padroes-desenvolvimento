class Livro {
  titulo?: string;
  autor?: string;
  conteudo?: string;
  isbn?: string;

  exibirInfo(): void {
    console.log("Livro:", this.titulo, "-", this.autor, "-", this.isbn);
  }
}

// Criação do Livro
const livroCompleto = new Livro();
livroCompleto.titulo = "Diário de um Banana";
livroCompleto.autor = "Jeff Kinney";
livroCompleto.isbn = "978-8576831309";
livroCompleto.conteudo = "A vida nada fácil de um garoto na escola";

livroCompleto.exibirInfo();
// Livro: Diário de um Banana - Jeff Kinney - 978-8576831309