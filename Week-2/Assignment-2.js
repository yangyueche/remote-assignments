function avg(data) {
  var sum = 0;
  for (let x = 0; x < data.products.length; x++) {
    sum += data.products[x].price;
  }
  var avgr = sum / 3;
  return avgr;
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100
      },
      {
        name: "Product 2",
        price: 700
      },
      {
        name: "Product 3",
        price: 250
      }
    ]
  })
) // should print the average price of all products