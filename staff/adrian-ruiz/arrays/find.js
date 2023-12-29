const numbers = [5, 10, 8, 20, 70, 60]

function findFunction(array, callbackFunction) {
	// VARIABLE PARA ALMACENAR EL RESULTADO, POR DEFECTO UNDEFINED
	let findResult 

	// BUCLE PARA RECORRER CADA UNO DE LOS ELEMENTOS DEL ARRAY
	array.forEach(item => {
		// SI FINDRESULT YA TIENE VALOR, IGNORAMOS ESTE PASO DEL FOR EACH
		if (findResult) {
			return
		}

		// UTILIZAMOS EL CALLBACK FUNCTION PARA COMPROBAR EL ITEM QUE ESTAMOS RECORRIENDO DEL ARRAY
		const result = callbackFunction(item)

		// SI EL RESULTADO ES TRUE, ASIGNAMOS FINDRESULT AL VALOR DEL ITEM ACTUAL DEL ARRAY
		if (result) {
			findResult = item
		}

	})

	return findResult
}

/* function findFunction(array, callbackFunction) {
	// VARIABLE PARA ALMACENAR EL RESULTADO, POR DEFECTO UNDEFINED
	let findResult 

	// BUCLE PARA RECORRER CADA UNO DE LOS ELEMENTOS DEL ARRAY
	array.forEach(item => {
		// SI FINDRESULT YA TIENE VALOR, IGNORAMOS ESTE PASO DEL FOR EACH
		if (findResult !== undefined) {
			return
		}

		// UTILIZAMOS EL CALLBACK FUNCTION PARA COMPROBAR EL ITEM QUE ESTAMOS RECORRIENDO DEL ARRAY
		const result = callbackFunction(item)

		// SI EL RESULTADO ES TRUE, ASIGNAMOS FINDRESULT AL VALOR DEL ITEM ACTUAL DEL ARRAY
		if (result === true) {
			findResult = item
		}

	})

	return findResult
} */

/* function checkNumberFunction() {

} */

const numberBiggerThan50Function = function(number) {
	return number > 50
}

console.log(findFunction(numbers, numberBiggerThan50Function))