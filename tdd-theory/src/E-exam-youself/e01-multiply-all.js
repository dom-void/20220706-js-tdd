function multiplyAll(...numbers) {
   if(numbers.length === 0) {
     return 1;
   }
   let result = 1;
   numbers.forEach((num) => {
        if(typeof num === 'number') {
            result = result * num;
        }
   })
   return result;
}

// To jest "named export" w Node.js
exports.multiplyAll = multiplyAll;

// Tak wyglądałby default export:
// module.exports = multiplyAll
