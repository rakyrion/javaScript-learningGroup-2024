
function replaceFunction(text, charToSearch, charToReplace) {
	let newText = ""

	for (let i = 0; i < text.length; i++) {
		if (text[i] === charToSearch) {
			newText = newText + charToReplace
		} else {
			newText = newText + text[i]
		}
	}

	return newText
}

console.log(replaceFunction('unicornio', 'c', 'x'))