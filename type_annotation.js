"use strict";
// type annotation is nothing but we give expesitly tipe to the variable
// ex  : let num : number
const prodect = {
    name: "Phone",
    price: 25,
    quantity: 2
};
const calculateTP = (prodect) => {
    return prodect.price * prodect.quantity;
};
console.log(calculateTP(prodect));
