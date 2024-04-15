import React, { useEffect } from 'react';

/*Creo la clase Libro para instanciar varios objetos libros, objetos que tendrán como propiedades; el titulo, autor, genero, precio, cantidad, etc.*/
class Libro{
    constructor(titulo, autor, genero,precio,cantidad,stock, numSerie, imagen){
        this.titulo =   titulo;
        this.autor  =   autor;
        this.genero =   genero;
        this.precio =   parseFloat(precio);
        this.cantidad = parseFloat(cantidad);
        this.stock  =   stock;
        this.numSerie  =   numSerie;
        this.imagen =   imagen;  
    }
}

/*  Se crean instancias de varios objetos tipo Libro, para agregar a las propiedades de los libros su información requerida
    La idea de esto es crear una BD de información para agregarlo en un arreglo, que contendra todos los libros.
    Con la información de este arreglo se mostrara en el FrontEnd del index.html, a través de DOM y se guardara la información
    en el Local Storage.
    */
const nuevoLibro1 = new Libro("El enigma sagrado", "Christian Jacq", "Misterio histórico","40000","1","2","1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3JhdENon2YLMvdi4SYTbV49eq6GPdu8HcxWZibeBOCQucvXKzy8QRhx44RUuLR72iJ8&usqp=CAU");
const nuevoLibro2 = new Libro("La piedra de luz", "Christian Jacq", "Novela histórica","50000","1","3","2","https://m.media-amazon.com/images/I/51LJ7u9wa5L._SL500_.jpg");
const nuevoLibro3 = new Libro("Ramsés: El hijo de la luz", "Christian Jacq", "Novela histórica","30000","1","4","3","https://www.greenlibros.com/cdn/shop/products/e0454a12-60c8-40c0-84a0-81a2c7dde50c-53_19420366_0_christianjacqramsselhijodelalu_1024x1024.jpg?v=1688153410");
const nuevoLibro4 = new Libro("El médico", "Noah Gordon", "Novela histórica","40000","1","10","4","https://i.ebayimg.com/images/g/4HsAAOSw3MNkg6Id/s-l960.jpg");
const nuevoLibro5 = new Libro("Los pilares de la Tierra", "Ken Follett", "Novela histórica","55000","1","15","5","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3ScjvrrGTMBykIWjUGXm_e_BDa_eyV2tKXNF7-OvNbny5v0bypJUU_i-pNyKXc4OHhqz4S1RDkQdKvC83f8cJBzJOh4C2oV_nr2I_PbIK&usqp=CAc");
const nuevoLibro6 = new Libro("La Sombra del Viento", "Carlos Ruiz Zafón", "Misterio","45000","1","3","6","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmctzrSjg-TVuwsyeZQwy6A1ApSxewn3_WGe_jqX0OGLE_ZKM-MYojx7lvsqkNiGYRvrRA4-1rPzKLIliMI3xKPzGSbwefFJ9AWg2oV8-FCmblMIZowL8dOnaVSNlo40NqSf60qQY&usqp=CAc");
const nuevoLibro7 = new Libro("Del Hobbit", "J.R.R. Tolkien", "Fantasía","32000","1","9","7","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7WuGpf0-sId23rMRkbj8hsuaBtOD6lUDYE523m2qRTLCqTnAowSjWk-NsExpFE_rODrDs8XZbaPrkIr_0gMoWOxfC9AwqX-d3JZNQR7gUR7IQP_W2DRhh&usqp=CAc");
const nuevoLibro8 = new Libro("El nombre del viento", "Patrick Rothfuss", "Fantasía épica","48000","1","6","8","https://images.cdn3.buscalibre.com/fit-in/360x360/fa/3c/fa3cd0450f8f59f3e4dcf35b4e0f8b71.jpg");
const nuevoLibro9 = new Libro("Cazadores de sombras: Ciudad de hueso", "Cassandra Clare", "Fantasía urbana","53000","1","8","9","https://images.cdn2.buscalibre.com/fit-in/360x360/b5/e4/b5e4f0f82c7df83d073462f6dea866ad.jpg");
const nuevoLibro10 = new Libro("El cuento de la criada", "Margaret Atwood", "Ciencia ficción","57000","1","7","10","https://images.cdn3.buscalibre.com/fit-in/360x360/9e/de/9ede512123e015bb390a10ba35f8d138.jpg");
const nuevoLibro11 = new Libro("Ankor","Jorge Angel Livraga","Filosofia","49000","1","19","11","https://m.media-amazon.com/images/I/61GuCAsNsdL._SY522_.jpg");
const nuevoLibro12 = new Libro("El misterio de la casa encantada", "Laura Gómez", "Misterio", "25000","1", "10", "12", "https://m.media-amazon.com/images/I/41Kjz3hahTL._SX342_SY445_.jpg");
const nuevoLibro13 = new Libro("Viaje a lo desconocido", "Carlos Ramírez", "Aventura", "30000","1", "8", "13", "https://img2.rtve.es/p/105091/imgbackground/?h=320");
const nuevoLibro14 = new Libro("El secreto del bosque", "Ana Martínez", "Fantasía", "28000","1" ,"15", "14", "https://m.media-amazon.com/images/I/51iGyZOSC-L._SX342_SY445_.jpg");
const nuevoLibro15 = new Libro("Amor en París", "María Rodríguez", "Romance", "20000","1", "20", "15", "https://m.media-amazon.com/images/I/41X3Ae9ipuL._SY445_SX342_.jpg");
const nuevoLibro16 = new Libro("La máquina del tiempo", "H.G. Wells", "Ciencia Ficción", "35000","1", "12", "16", "https://http2.mlstatic.com/D_NQ_NP_2X_773883-MLA32137917401_092019-F.webp");
const nuevoLibro17 = new Libro("Aprendiendo JavaScript", "Juan Pérez", "Tecnología", "40000","1", "5", "17", "https://http2.mlstatic.com/D_NQ_NP_2X_967141-MLU69767757320_062023-F.webp");
const nuevoLibro18 = new Libro("Historia de la pintura", "Luisa Gutiérrez", "Arte", "32000","1" ,"18", "18", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPEAhNehErwD5Buz-AIffRN8UyA3oynWuUGE8PePqggInUfwdk");
const nuevoLibro19 = new Libro("Cocina del mundo", "Chef Ricardo", "Gastronomía", "45000","1", "7", "19", "https://www.juanbohon.cl/wp-content/uploads/2020/09/image002.jpg");
const nuevoLibro20 = new Libro("Poemas del alma", "Gabriela Mistral", "Poesía", "22000", "1","25", "20", "https://www.poemas-del-alma.com/blog/wp-content/uploads/2023/01/mistral.jpg");
const nuevoLibro21 = new Libro("El último samurái", "Tom Cruise", "Historia", "38000", "1","9", "21", "https://www.originalfilmart.com/cdn/shop/products/LastSamurai_2003_teaser_original_film_art_5000x.jpg?v=1610595243");
const nuevoLibro22 = new Libro("La isla misteriosa", "Julio Verne", "Aventura", "30000","1" ,"15", "22", "https://images.cdn3.buscalibre.com/fit-in/360x360/8e/49/8e4944bedf745f78bc280f759b0112a7.jpg");
const nuevoLibro23 = new Libro("El retrato de Dorian Gray", "Oscar Wilde", "Drama", "26000","1", "12", "23", "https://falabella.scene7.com/is/image/Falabella/gsc_110347578_35873_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro24 = new Libro("Rebelión en la granja", "George Orwell", "Ficción política", "34000","1", "8", "24", "https://http2.mlstatic.com/D_NQ_NP_2X_884939-MLC46574428669_062021-F.webp");
const nuevoLibro25 = new Libro("Matar a un ruiseñor", "Harper Lee", "Drama legal", "29000","1" ,"10", "25", "https://images.cdn1.buscalibre.com/fit-in/360x360/fc/ca/fccabb1ecb9cf1df055f8f8898a4f311.jpg");
const nuevoLibro26 = new Libro("El señor de los anillos", "J.R.R. Tolkien", "Fantasía épica", "42000","1", "7", "26", "https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg");
const nuevoLibro27 = new Libro("Crónica de una muerte anunciada", "Gabriel García Márquez", "Realismo mágico", "24000","1", "18", "27", "https://images.cdn2.buscalibre.com/fit-in/360x360/30/2e/302ec58225bc7691ec36ac3bf1697efc.jpg");
const nuevoLibro28 = new Libro("El nombre de la rosa", "Umberto Eco", "Misterio histórico", "36000", "1","6", "28", "https://images.cdn2.buscalibre.com/fit-in/360x360/44/51/4451db7bb092a71eb16850488d5f67e0.jpg");
const nuevoLibro29 = new Libro("Orgullo y prejuicio", "Jane Austen", "Romance clásico", "28000", "1","22", "29", "https://falabella.scene7.com/is/image/Falabella/gsc_115230639_1048288_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro30 = new Libro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico", "40000","1", "9", "30", "https://images.cdn3.buscalibre.com/fit-in/360x360/b9/d5/b9d5d415d11423d0f9e98074ee6997d9.jpg");
const nuevoLibro31 = new Libro("Las aventuras de Sherlock Holmes", "Arthur Conan Doyle", "Detective", "32000","1", "14", "31", "https://images.cdn3.buscalibre.com/fit-in/360x360/60/4c/604c6aeba07c02fee242e90144451eb9.jpg");
const nuevoLibro32 = new Libro("El gran Gatsby", "F. Scott Fitzgerald", "Ficción moderna", "37000","1", "11", "32", "https://falabella.scene7.com/is/image/Falabella/gsc_110346454_26094_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro33 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "Clásico español", "33000","1", "13", "33", "https://falabella.scene7.com/is/image/Falabella/gsc_121410099_3024149_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro34 = new Libro("El principito", "Antoine de Saint-Exupéry", "Fábula", "26000","1" ,"16", "34", "https://falabella.scene7.com/is/image/Falabella/gsc_122153524_3252883_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro35 = new Libro("Moby Dick", "Herman Melville", "Aventura marina", "39000", "1","10", "35", "https://images.cdn2.buscalibre.com/fit-in/360x360/3d/d3/3dd3bc64abf0b389ae00fbdada920f84.jpg");
const nuevoLibro36 = new Libro("Frankenstein", "Mary Shelley", "Ciencia ficción gótica", "30000","1", "12", "36", "https://falabella.scene7.com/is/image/Falabella/gsc_113584976_683577_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro37 = new Libro("Los miserables", "Victor Hugo", "Drama histórico", "35000","1", "8", "37", "https://images.cdn1.buscalibre.com/fit-in/360x360/f3/ef/f3ef4b342c9ed29911d6ce25e498a4f7.jpg");
const nuevoLibro38 = new Libro("Drácula", "Bram Stoker", "Terror gótico", "31000","1", "15", "38", "https://falabella.scene7.com/is/image/Falabella/gsc_110346780_26263_1?wid=1500&hei=1500&qlt=70");
const nuevoLibro39 = new Libro("El perfume", "Patrick Süskind", "Novela histórica", "29000","1", "17", "39", "https://image.cdn0.buscalibre.com/60e394de8463b5f3158b7a16.__RS360x360__.jpg");
const nuevoLibro40 = new Libro("Las uvas de la ira", "John Steinbeck", "Ficción social", "36000","1", "9", "40", "https://images.cdn1.buscalibre.com/fit-in/360x360/d0/ce/d0ced4b0ab4e0a863a2ef564f876732a.jpg");
const nuevoLibro41 = new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", "Fantasía juvenil", "38000","1", "11", "41", "https://falabella.scene7.com/is/image/Falabella/gsc_116306931_1439313_1?wid=1500&hei=1500&qlt=70");
const libros       = [nuevoLibro1,nuevoLibro2,nuevoLibro3,nuevoLibro4,nuevoLibro5,nuevoLibro6,nuevoLibro7,nuevoLibro8,nuevoLibro9,nuevoLibro10, nuevoLibro11, nuevoLibro12, nuevoLibro13,nuevoLibro14,nuevoLibro15,nuevoLibro16,nuevoLibro17,nuevoLibro18,nuevoLibro19,nuevoLibro20,nuevoLibro21,nuevoLibro22, nuevoLibro23, nuevoLibro24, nuevoLibro25,nuevoLibro26,nuevoLibro27,nuevoLibro28,nuevoLibro29,nuevoLibro30,nuevoLibro31,nuevoLibro32,nuevoLibro33,nuevoLibro34, nuevoLibro35, nuevoLibro36, nuevoLibro37,nuevoLibro38,nuevoLibro39,nuevoLibro40,nuevoLibro41];

const Cargaproductos = () => {

  const agregarCards = (arreglo) => {
    const cardGroup = document.getElementById('card-group');

    arreglo.forEach((e) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = e.numSerie;
      card.innerHTML = `
        <div>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${e.imagen}" class="img-fluid rounded-start" width="80px" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${e.titulo}</h5>
                <p class="card-text">Autor: ${e.autor}</p>
                <p class="card-text">Genero: ${e.genero}</p>
                <p class="card-text">Precio: ${e.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                <p class="card-text">Stock: ${e.stock}</p>
                <button type="button" id="${e.numSerie}" class="boton">Comprar</button>
              </div>
            </div>
          </div>
        </div>
        `; 

      cardGroup.appendChild(card); 
    });
  };

  useEffect(() => {
    agregarCards(libros);
  }, []);

  return (
    <div>
      <div id="card-group"></div>
      <div id="itemsCarrito"></div>
    </div>
  );
};

export default Cargaproductos;
