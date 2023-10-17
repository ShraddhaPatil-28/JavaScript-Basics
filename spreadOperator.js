const oddNumbers = [1,3,5,7,9]
const evenNumbers = [2,4,6,8,10]
// const age = [80, 55, 25, 20, 18, 26, 33]

const allNumbers = [...oddNumbers, ...evenNumbers]

console.log(allNumbers);

const clothes = {
    brand: "Zara",
    type: "T-Shirts",
    size: "M",
    colour: "Blue"
}

const clothes_price = {
    price: 1200,
    colour: "Red"
}

// const clothes_details = {...clothes_price, ...clothes}

const clothes_details = {...clothes, ...clothes_price}
console.log(clothes_details);