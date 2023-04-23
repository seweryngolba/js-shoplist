const arrayContainer = document.querySelector("array-list");

let shopProduct = [
  {
    productName: "Piłka",
    productPrice: 59.99,
  },
  {
    productName: "Pompka",
    productPrice: 19.99,
  },
  {
    productName: "Koszulka",
    productPrice: 99.99,
  },
  {
    productName: "Bluza",
    productPrice: 125.99,
  },
  {
    productName: "Torba",
    productPrice: 159.99,
  },
  {
    productName: "Buty",
    productPrice: 239.99,
  },
];

let shipmentProduct = [
  {
    productName: "Piłka do siatkówki",
    productPrice: 59.99,
  },
  {
    productName: "Piłka do tenisa",
    productPrice: 59.99,
  },
  {
    productName: "Piłka do koszykówki",
    productPrice: 59.99,
  },
];

// .forEach()

const showProducts = () => {
  console.log("Lista Produktów:");
  console.log("================");
  shopProduct.forEach((product) => {
    console.log(`${product.productName} - ${product.productPrice} PLN`);
  });
  console.log("================");
};

// .push() --> Dodawanie elementów

const addNewProduct = () => {
  const newProductName = prompt("Podaj nazwe produktu");
  const newProductPrice = prompt(`Podaj cene ${newProductName}: `);
  shopProduct.push({
    productName: newProductName,
    productPrice: Number(newProductPrice).toFixed(2),
  });
  showProducts();
};

// Usuwanie ostatniego elementu .pop()

const removeLastProduct = () => {
  let lastProduct = shopProduct.pop();
  showProducts();
  return lastProduct;
};

// Usuwanie pierwszego elementu .shift()

const removeFirstProduct = () => {
  let firstProduct = shopProduct.shift();
  showProducts();
  return firstProduct;
};
