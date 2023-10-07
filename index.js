let products = [
    {   
        name: "milk",
        type: "milk",
        price: 16000
    },
    {   
        name: "cheese",
        type: "milk",
        price: 25999
    },
    {   
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {   
        name: "govyadina",
        type: "meat",
        price: 90000
    },
    {   
        name: "baranina",
        type: "meat",
        price: 94000
    },
    {   
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {   
        name: "vodka",
        type: "alcohol",
        price: 20000
    },
    {   
        name: "tekila",
        type: "alcohol",
        price: 50000
    },
    {   
        name: "pivo",
        type: "alcohol",
        price: 17000
    },
    {   
        name: "champain",
        type: "alcohol",
        price: 100000
    },
]

//1
let total = products.reduce((sum, product) => sum + product.price, 0);
console.log('посчитать общую сумму всех товаров ' + total);

//2

let category = "milk";
let categors = products.filter(product => product.type === category);
let category0 = categors.reduce((sum, product) => sum + product.price, 0);
console.log('посчитать общую сумму всех товаров конкретной категории '+category0);



let category6 = "meat";
let categors6 = products.filter(product => product.type === category6);
let category06 = categors6.reduce((sum, product) => sum + product.price, 0);
console.log('посчитать общую сумму всех товаров конкретной категории '+category06);


let category7 = "alcohol"
let categors7 = products.filter(product => product.type === category7);
let category07 = categors7.reduce((sum, product) => sum + product.price, 0);
console.log('посчитать общую сумму всех товаров конкретной категории '+category07);


//3

let category1 = "meat";

let product = products.filter(product => product.type === category1).length;
console.log('посчитать сколько товаров конкретной категории '+product);


let category2 = "milk";

let product2 = products.filter(product => product.type === category2).length;
console.log('посчитать сколько товаров конкретной категории '+product2);

let category3 = "alcohol";
let product3 = products.filter(product => product.type === category3).length;
console.log('посчитать сколько товаров конкретной категории ' + product3);

//4

let Price = products.reduce((sum, product) => sum + product.price, 0) / products.length;
console.log('найти средний прайс всех товаров ' + Price);










// 1. посчитать общую сумму всех товаров
// 2. посчитать общую сумму всех товаров конкретной категории
// 3. посчитать сколько товаров конкретной категории 
// 4. найти средний прайс всех товаров


