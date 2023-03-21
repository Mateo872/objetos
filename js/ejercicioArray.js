// Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - category - price. Realizar las siguientes tareas:
// Mostrar la tabla completa
// filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.
// Buscar un producto serum y mostrarlo por pantalla,
// Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.

let listProducts = [
  {
    nameProduct: "Hidratante facial",
    price: 3500,
    category: "Hidratante",
  },
  { nameProduct: "Tonico exfoliante", price: 2350.45, category: "Tonico" },
  {
    nameProduct: "Protector solar factor 50",
    price: 3300,
    category: "Protector solar",
  },
  {
    nameProduct: "Protector solar toque seco factor 50",
    price: 4100,
    category: "Protector solar",
  },
  {
    nameProduct: "Protector solar con color factor 50",
    price: 3850.5,
    category: "Protector solar",
  },
  {
    nameProduct: "Gel de limpieza facial",
    price: 1740.99,
    category: "Limpieza",
  },
  { nameProduct: "Tonico hidratante", price: 1250.99, category: "Tonico" },
  { nameProduct: "Sérum hidratante", price: 4250.99, category: "Sérum" },
  {
    nameProduct: "Exfoliante de azúcar cherry",
    price: 1200,
    category: "Labios",
  },
  {
    nameProduct: "Pads de hidrogel para contorno de ojos",
    price: 2800,
    category: "Ojos",
  },
  {
    nameProduct: "Mascarilla facial",
    price: 3250.99,
    category: "Mascaras",
  },
  { nameProduct: "Sérum facial con PHA", price: 3200, category: "Sérum" },
  { nameProduct: "Bálsamo labial", price: 3200, category: "Labios" },
  { nameProduct: "Crema contorno de ojos", price: 3200, category: "Ojos" },
  {
    nameProduct: "Protector solar en barra",
    price: 3800,
    category: "Protector solar",
  },
  {
    nameProduct: "Mascara de hidratación y reparación",
    price: 1200,
    category: "Mascaras",
  },
  { nameProduct: "Agua micellar", price: 2890, category: "Limpieza" },
];

function drawTable(products) {
  const table = document.createElement("table");

  const header = table.createTHead();
  const rowHeader = header.insertRow();
  const cellProduct = rowHeader.insertCell();
  const cellCategory = rowHeader.insertCell();
  const cellPrice = rowHeader.insertCell();

  cellProduct.textContent = "Producto";
  cellCategory.textContent = "Categoría";
  cellPrice.textContent = "price";

  const body = table.createTBody();

  products.forEach((product) => {
    const rowProduct = body.insertRow();
    const cellProduct = rowProduct.insertCell();
    const cellCategory = rowProduct.insertCell();
    const cellPrice = rowProduct.insertCell();

    cellProduct.textContent = product.nameProduct;
    cellCategory.textContent = product.category;
    cellPrice.textContent = product.price.toFixed(2);
  });

  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  table.style.fontSize = "14px";
  table.style.border = "1px solid #ddd";

  header.style.backgroundColor = "#f2f2f2";
  header.style.fontWeight = "bold";

  const cells = table.querySelectorAll("td, th");

  cells.forEach((cell) => {
    cell.style.border = "1px solid #ddd";
    cell.style.padding = "8px";
    cell.style.textAlign = "left";
  });

  document.body.appendChild(table);
}

drawTable(listProducts);

const sunscreensSunscreens = listProducts.filter(
  (product) => product.category === "Protector solar"
);

drawTable(sunscreensSunscreens);

const serum = listProducts.find((product) =>
  product.nameProduct.includes("Sérum")
);

document.write(
  `<p>${serum.nameProduct} - ${serum.category} - $${serum.price.toFixed(2)}</p>`
);

const bruma = listProducts.find((product) =>
  product.nameProduct.includes("Bruma")
);

if (bruma) {
  document.write(
    `<p>${bruma.nameProduct} - ${bruma.category} - $${bruma.price.toFixed(
      2
    )}</p>`
  );
} else {
  document.write(
    "<p>El producto 'Bruma' no se encuentra en el inventario.</p>"
  );
}
