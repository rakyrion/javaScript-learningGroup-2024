const nombres = ['Olatz', 'Nagore', 'Porti', 'Alejandro', 'Carmelo']

function sliceFunction(array, start, end) {
	if (start > array.length) return []

	let startIndex = 0
	if (start > 0) startIndex = start

	if (start < 0) startIndex = array.length + start

	let endIndex = array.length

	if (end > array.length || end === undefined) {
		endIndex = array.length
	} else if (end < 0) {
		endIndex = array.length + end
	} else if (end !== undefined) {
		endIndex = end
	}

	const result = []
	let x = 0
	for (let i = startIndex; i < endIndex; i++) {
		result[x] = array[i]
		x ++
	}

	return result

}


console.log(sliceFunction(nombres))
// ['Olatz', 'Nagore', 'Porti', 'Alejandro', 'Carmelo']


console.log(sliceFunction(nombres, 2))
// ['Porti', 'Alejandro', 'Carmelo']

console.log(sliceFunction(nombres, 2, -1))
// ['Porti', 'Alejandro']

console.log(sliceFunction(nombres, -2))
// ['Alejandro', 'Carmelo']

console.log(sliceFunction(nombres, -3, -2))
// ['Porti']

console.log(sliceFunction(nombres, undefined, -2))
// ['Olatz', 'Nagore', 'Porti']

console.log(sliceFunction(nombres, 100))
// []

console.log(sliceFunction(nombres, 1, 100))
// ['Nagore', 'Porti', 'Alejandro', 'Carmelo']
