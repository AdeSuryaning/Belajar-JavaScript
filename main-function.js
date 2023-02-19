// let PI = 3.14;

// const hitungLuasLingkaran = (jariJari) => {
//     return PI * (jariJari * jariJari);
// }

// console.log(hitungLuasLingkaran(4));

// PI = 5; // tidak sengaja nilai PI dirubah

// console.log(hitungLuasLingkaran(4));

const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(8));
console.log(hitungLuasLingkaran(8));


//pure function
const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    name :'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});