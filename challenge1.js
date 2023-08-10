export {}; // Do not touch!!

// TypeScript
function calculatePrice(quantity: number, pricePerUnit: number): number {
    return quantity * pricePerUnit;
}

const quantity: number = 5;
const pricePerUnit: number = 10;

const totalPrice: number = calculatePrice(quantity, pricePerUnit);
console.log("Total price: $" + totalPrice);

const discount: number = 2;
const discountedPrice: number = totalPrice - discount;

console.log("Discounted price: $" + discountedPrice);

const finalPrice: number = discountedPrice - 5;

console.log("Final price: $" + finalPrice);

const itemsSold: number = 7;

console.log("Items sold: " + itemsSold);