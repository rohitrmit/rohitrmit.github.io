let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
  { name: "Purse", price: 30 },
];
function calculateTotal(discount) {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total = total + shoppingCart[i].price;
    //   total += shoppingCart[i].price;
    console.log("total so far", total);
  }
  console.log("final total", total);
  //   let discount = 0.1;
  let discountedPrice = 0;
  if (total > 100) {
    discountedPrice = total - total * discount;
  }
  console.log("discounted price", discountedPrice);
  return null;
}
let val = calculateTotal(0.5);
val = calculateTotal(0.1);
