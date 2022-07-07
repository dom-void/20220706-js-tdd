// const isNumber = num => typeof num === 'number' && !Number.isNaN(num);
// const multiplyFn = (a, b) => a * b
/*
 return numbers.filter(isNumber).reduce(multiplyFn, 1);
*/

function multiplyAll(...numbers) {
   /*
   let result = 1;
   numbers.forEach(num => {
        if(typeof num === 'number' && !Number.isNaN(num)) {
            result *= num;
        }
   })
   return result;
   */
   // Alternatywa (programowanie funkcyjne):
   return numbers
        .filter(num => typeof num === 'number' && !Number.isNaN(num))
        .reduce((a, b) => a * b, 1);
}

// To jest "named export" w Node.js
exports.multiplyAll = multiplyAll;

// Tak wyglądałby default export:
// module.exports = multiplyAll
