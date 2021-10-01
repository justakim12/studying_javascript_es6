// Template literals
let word1 = 'Dylan';
let word2 = 'Israel';

const fullName = `${word1} ${word2}`

console.log(fullName);

// Multiline String
let example = `${word1}
${word2}
`;

console.log(example)

// Destructuring Objects
const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);

// Spread Operator
let example1 = [1,2,3,4,5,6]
let example2= [...example1]
example2.push(true)

console.log(example1)
console.log(example2)

// Rest Operator
function add(...nums) {
    console.log(nums);
}

add(4, 5, 6, 7)