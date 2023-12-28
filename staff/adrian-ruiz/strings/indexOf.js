
function indexOfFunction(text, charToSearch, startingIndex) {
	let start = 0
	if (startingIndex > 0) start = startingIndex

	for (let i = start; i < text.length; i++) {
		if (text[i] === charToSearch) {
			return i
		}
	}

	return -1
}

/* 
	SIN UTILIZAR STARTING INDEX

function indexOfFunction(text, charToSearch, startingIndex) {
	for (let i = 0; i < text.length; i++) {
		if (text[i] === charToSearch) {
			return i
		}
	}
} */


console.log(indexOfFunction('quevedo', 'x', 3))