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

function montarLivroEditoraModerna() {
  const livro = new LivroModerno();
  const capa = new CapaModerna();

  console.log(livro.getDescricao());
  console.log(capa.getEstilo());
}

function montarLivroEditoraClassica() {
  const livro = new LivroClassico();
  const capa = new CapaClassica();

  console.log(livro.getDescricao());
  console.log(capa.getEstilo());
}

// Teste
montarLivroEditoraModerna();
montarLivroEditoraClassica();