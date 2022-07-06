const user = {name: 'John', profession: 'programmer'}

const userCopy = {};

// Mogę zrobić tak:
console.log(user.name);
console.log(user['name']);
console.log('--------');

for(const key in user) {
    userCopy[key] = user[key];
}

console.log(user);
console.log(userCopy);
console.log(user === userCopy);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
