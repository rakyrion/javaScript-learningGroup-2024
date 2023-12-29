const animals = ['cow', 'chicken', 'dog']

/* animals.length = animals.length + 1 */

/* animals[animals.length] = 'test' */


function pushFunction(array, ...arguments) {
	arguments.forEach(item => {
		array.length = array.length + 1
		array[array.length -1] = item
	})

	console.log(array)

	return array.length
}

const test1 = pushFunction(animals, 'wale')

console.log('test1', test1)

const test2 = pushFunction(animals, 'sheep', 'cat', 'fox')

console.log('test2', test2)