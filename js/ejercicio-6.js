// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Book {
  constructor(isbn, title, author, numberPages) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
  }

  getIsbn() {
    return this.isbn;
  }
  setIsbn(isbn) {
    this.isbn = isbn;
  }

  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }

  getAuthor() {
    return this.author;
  }
  setAuthor(author) {
    this.author = author;
  }

  getNumberPages() {
    return this.numberPages;
  }
  setNumberPages(numberPages) {
    this.numberPages = numberPages;
  }

  showBook() {
    console.log(
      `El libro ${this.title} con ISBN ${this.isbn} creado por el autor ${this.author} tiene ${this.numberPages} páginas`
    );
  }
}

// Ejemplos de libros

const book1 = new Book("123456789", "El Quijote", "Miguel de Cervantes", 863);

const book2 = new Book(
  "987654321",
  "Cien años de soledad",
  "Gabriel García Márquez",
  471
);

// Mostrar información de los libros

book1.showBook();
book2.showBook();

// Comparar número de páginas de los libros

if (book1.getNumberPages() > book2.getNumberPages()) {
  console.log(
    `El libro ${book1.getTitle()} tiene más páginas que el libro ${book2.getTitle()}`
  );
} else if (book2.getNumberPages() > book1.getNumberPages()) {
  console.log(
    `El libro ${book2.getTitle()} tiene más páginas que el libro ${book1.getTitle()}`
  );
} else {
  console.log("Los libros tienen el mismo número de páginas");
}
