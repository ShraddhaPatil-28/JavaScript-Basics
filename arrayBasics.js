// myname
// myName - camelcase
//my_name - snakecase
//MyName - Pascalcase/Titlecase

const x = ["Shraddha", 25, [85, 45], ["Priyanka", "Sakshi"], {favFood:'Pani Puri', favColor:"Red"}]

console.log(x[2][0]);
console.log(x[3][1]);
console.log(x[4].favFood);

const person = {
    name: "Sakshi",
    age: 19
}

// console.log(JSON.stringify(person));
const z = JSON.stringify(person)

console.log(JSON.parse(z));