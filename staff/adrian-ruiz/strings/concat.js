

function concatFunction(...arguments) {
	// PARA ACCEDER A UN NÚMERO INDETERMINADO DE PARÁMETROS, USAMOS EL "SPREAD" (...) Y NOS PONDRÁ TODOS LOS PARÁMETROS EN UN ARRAY

	// INICIALIZAMOS UNA VARIBALE CON LET PARA MODIFICAR EL VALOR EN CADA PASO DEL BUCLE
	let result

	// BUCLE POR CADA UNO DE LOS ELEMENTOS DE ARGUMENTS
	arguments.forEach(word => {

		// EN EL PRIMER CASO, RESULT SERÁ UNDEFINED, POR ESO LO CONTROLAMOS CON UN IF
		if (result === undefined) {
			result = word
		} else {
			result += word
		}
	})

	// DEVOLVEMOS EL RESULTADO
	return result
}

console.log(concatFunction('Olatz', ' ', 'Quevedo', ' ', 'Torres'))