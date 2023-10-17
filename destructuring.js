const car = ["Nexon", "Rapid", "Swift", "Hector", "Punto"]

// const Tata = car[0]
// const Skoda = car[1]
// const Suzuki = car[2]
// const MG = car[3]
// const Fiat = car[4]

// const [Tata, , Suzuki, MG, Fiat] = car
const [Tata, Skoda, Suzuki, MG, Fiat] = car

console.log(Tata, Skoda, Suzuki, MG, Fiat);

const carInfo = {
    brand: "VolksWagen",
    model: "Polo",
    year_of_manufacture: 2020,
    price: "20L"
}

const {brand, model, year_of_manufacture, price} = carInfo

console.log(brand, year_of_manufacture, price, model);

// console.log(carInfo.brand);
// console.log(carInfo.model);
// console.log(carInfo.year_of_manufacture);
// console.log(carInfo.price);