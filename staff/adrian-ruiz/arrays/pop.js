
const nombres = ['Olatz', 'Nagore', 'Porti', 'Carmelo']

function popFunction(array) {
	// COGEMOS EL ÚLTIMO INDICE (LA LONGITUD EMPIEZA EN 1 EN VEZ DE 0 COMO EL INDICE, ASÍ QUE RESTAMOS 1)
	const lastIndex = array.length -1

	// ACCEDEMOS AL ÚLTIMO INDICE DEL ARRAY PARA GUARDAR EL VALOR
	const lastElement = array[lastIndex]

	// MODIFICAMOS LA LONGITUD PARA ELIMINAR EL ÚLTIMO ELEMENTO
	array.length = array.length -1

	console.log('array', array)

	return lastElement
}

const element = popFunction(nombres)

console.log('element', element)