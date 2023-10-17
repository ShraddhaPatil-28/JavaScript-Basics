// console.log("Akash")
// console.log("Shraddha")
// console.log("Sakshi");
// console.log("Priyanka");

const ageArray = [25, 50, 75, 100]

// console.log(age[3]);

// let age
// for(age = 0; age<ageArray.length; age++){
//     console.log(ageArray[age]);
// }

for(age1 of ageArray){
    console.log(age1);
}

const fname = "Akash"
const age = 25
const profession = "Software developer"

// const person = {
//     fname: "Akash",
//     age: 25,
//     profession: "Software developer"
// }

//We can write only keys in objects when key and variable name is similar
const person = {
    fname,
    age,
    profession
}

for(x in person){
    console.log(person[x]);
}

// console.log(person.profession);
// console.log(person["name"]);