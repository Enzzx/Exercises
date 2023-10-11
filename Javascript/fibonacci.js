function fibo(limit) {
	let a = 1
	let b = 0
	while (a < limit) {
		console.log(a)
		a = a + b
		b = a - b
	}
}
