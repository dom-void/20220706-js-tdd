function giveMeNumber() {
	return 789;
}

const num = giveMeNumber();
console.log(num);


async function giveMeNumberAsync() {
	return 789;
}

const asyncNum = giveMeNumberAsync();
console.log(asyncNum);

giveMeNumberAsync().then((num) => {
	console.log(num);
})
