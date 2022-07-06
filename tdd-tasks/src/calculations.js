export function asyncAdd(a, b) {
	return new Promise((resolve) => {
		resolve(a + b);
	})
}
