const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let a = prompt("escolha um número")
a = String(a).split('').reverse()
let b = prompt("escolha outro número");
b = String(b).split('').reverse()

a.length > b.length ? hardSum(a, b) : hardSum(b, a)

function hardSum (a, b) {
	let add1 = false
	const result = []
	const loopies = b.length
	for(let i = 0; i < loopies; i++) {
		let count = numbers.slice(a[0])
		count = count.concat(numbers.slice(0, a[0]))
		count = add1 ? count.slice(1) : count
		//console.log(count, add1)
		
		let unit = count[b[0]]
		result.push(unit)
		
		add1 = numbers.indexOf(unit) < numbers.indexOf(a[0]) ? true : false
		//console.log(numbers.indexOf(unit), numbers.indexOf(a[0]))
		a.shift()
		b.shift()
	}
	
	console.log(a.length)
	while (a.length !== 0) {
		if (add1) {
			//console.log("shiftado")
			let shiftNumbs = numbers.slice(1)
			result.push(shiftNumbs[a[0]])
			add1 = false
		} else {
			//console.log("normal")
			result.push(a[0])
		}
		a.shift()
	}
	if (add1) { result.push("1") }
	console.log(`resultado: ${result.reverse()}`)
}
