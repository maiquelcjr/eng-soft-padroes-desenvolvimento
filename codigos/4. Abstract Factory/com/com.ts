interface Livro {
  getDescricao(): string;
}

interface Capa {
  getEstilo(): string;
}

// Produtos - Editora Moderna
class LivroModerno implements Livro {
  getDescricao(): string {
    return "Livro de linguagem moderna e objetiva.";
  }
}

class CapaModerna implements Capa {
  getEstilo(): string {
    return "Capa com design minimalista e cores vivas.";
  }
}

// Produtos - Editora Clássica
class LivroClassico implements Livro {
  getDescricao(): string {
    return "Livro com estilo tradicional e linguagem rebuscada.";
  }
}

class CapaClassica implements Capa {
  getEstilo(): string {
    return "Capa com moldura dourada e fontes clássicas.";
  }
}

// Fábrica abstrata
interface Editora {
  criarLivro(): Livro;
  criarCapa(): Capa;
}

// Fábricas concretas
class EditoraModerna implements Editora {
  criarLivro(): Livro {
    return new LivroModerno();
  }
  criarCapa(): Capa {
    return new CapaModerna();
  }
}

class EditoraClassica implements Editora {
  criarLivro(): Livro {
    return new LivroClassico();
  }
  criarCapa(): Capa {
    return new CapaClassica();
  }
}

function montarLivro(editora: Editora) {
  const livro = editora.criarLivro();
  const capa = editora.criarCapa();

  console.log(livro.getDescricao());
  console.log(capa.getEstilo());
}

// Teste
const moderna = new EditoraModerna();
const classica = new EditoraClassica();

montarLivro(moderna);
montarLivro(classica);