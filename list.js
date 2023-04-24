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

// Laczenie dwóch tablic 1 sposób .concat()

const addShipmentProduct = () => {
  console.log("Przyjechała dostawa produktów:");
  shopProduct = shopProduct.concat(shipmentProduct);
  showProducts();
};

//! Łącznie tablic (...spread))

const addDifShipmentProduct = () => {
  console.log("Przyjechała dostawa produktów:");
  let newItemsProducts = [...shopProduct, ...shipmentProduct];
  consoleLogProducts(newItemsProducts);
};

// dodawanie promocji .map()

const addPromotionOnAll = () => {
  const promotionProducts = shopProduct.map((product) => ({
    productName: product.productName,
    productPrice: Number(product.productPrice * 0.5).toFixed(2),
  }));
  consolelogProductsAllData(promotionProducts);
};

//! Znajdź produkt ( .filter())

const findProduct = () => {
  let lookinForItem = prompt("Czego szukasz?");

  const findedProduct = shopProduct.filter((item) => {
    return item.productName === lookinForItem;
  });
  if (findedProduct.length === 0) {
    console.log("Nie ma takiego produktu");
  } else {
    for (let i = 0; i < findedProduct.length; i++) {
      console.log(
        `Znalazłem ${findedProduct[i].productName} o cenie ${findedProduct[i].productPrice} PLN`
      );
    }
  }
};

//! Podlicz wartość produktów ( .reduce() )

const sumPriceOfAllProduct = () => {
  const sumPrices = shopProduct.reduce((acc, price) => {
    return acc + price.productPrice;
  }, 0);
  console.log(`Cena wszystkich produktów wynosi ${sumPrices.toFixed(2)}`);
};
