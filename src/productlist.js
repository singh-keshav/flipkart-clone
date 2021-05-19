const products = [];
const category = [
  "electronics",
  "clothings",
  "men",
  "women",
  "home&furniture",
  "flights",
];

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 10; j++) {
    let product = {
      pId: Math.floor(Math.random() * 1000000),
      pName: Math.random().toString(36).substr(2, 5),
      pRating: Math.floor(Math.random() * 5),
      pPrice: Math.floor(Math.random() * 1000000),
      pUnitSold: Math.floor(Math.random() * 1000000),
      pCategory: category[i],
      pCategoryId: i,
      pImage:
        "https://rukminim1.flixcart.com/image/416/416/air-cooler/w/e/p/md-2020-bajaj-original-imaergyyvqhjxyhh.jpeg?q=70",
    };

    products.push(product);
  }
}

// console.log(products);

export default products;
