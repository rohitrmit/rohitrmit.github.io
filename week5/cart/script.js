let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
  { name: "shades", price: 100 },
];
let total = 0;
console.log(shoppingCart);
for (let i = 0; i < shoppingCart.length; i++) {
  total = total + shoppingCart[i].price;
  console.log("Total so far is", total);
}
console.log("Final total is", total);
let discount = 0.1;
if (total > 100) {
  let discountedPrice = total - total * discount;
  console.log("Discounted price is", discountedPrice);
}
