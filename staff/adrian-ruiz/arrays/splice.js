const meses = ['Enero', 'Febrero', 'Marzo', 'Mayo', 'Ago']

const spliceFunction = (array, start, deleteNum, ...args) => {
	try {
		if (start === undefined) throw new Error('Start index is required')

		if (!(array instanceof Array)) throw new Error('First parameter must be an array')

		let startIndex = start
		if (start > array.length) startIndex = array.length
		else if (start < 0) startIndex = array.length + start

		let deleteCount = deleteNum
		if (deleteNum <= 0) deleteCount = 0
		if (deleteNum === undefined || deleteNum > (array.length - start)) deleteCount = array.length
		if (start < 0) deleteCount = -start

		const result = []

		// COMPROBAMOS CUANDO DELETE COUNT SEA MAYOR A 0, OSEA, HAY QUE ELIMINAR ITEMS
		if (deleteCount > 0 && startIndex < array.length) {
			// PRIMER BUCLE, ELIMINAMOS ELEMENTOS Y LOS ALMACENAMOS EN RESULT
			for (let i = 0; i < deleteCount; i++) {
				// I EMPEZARÁ SIENDO 0, POR LO QUE PODMEOS USAR I PARA ACCEDER A LOS INDICES DE RESULT
				// ACCEDEMOS A LOS ELEMENTOS QUE HAY QUE ELIMINAR, CON I + START INDEX
				result[i] = array[i + startIndex]
			}

			// CREAMOS UNA VARIABLE CONTROL QUE NOS ALMACENA EL INDICE EN EL QUE ACABAMOS DE ELIMINAR ELEMENTOS (ES DECIR, DESDE DONDE EMPIEZAN EL RESTO DE ELEMENTOS A GUARDAR)
			const control = startIndex + deleteCount

			// ESTE BUCLE, SE ENCARGA DE "MOVER" LOS ELEMENTOS QUE TENEMOS QUE GUARDAR, A PARTIR DEL INDICE DONDE EMPEZAMOS A ELIMINAR ELEMENTOS
			// EMPEZAMOS EN LA VARIABLE DE CONTROL (PRIMER ELEMENTO A GUARDAR), ACABAMOS CUANDO J SEA MENOR O IGUAL A LA LONGITUD DEL ARRAY (ES DECIR, HASTA EL FINAL)
			for (let j = control; j <= array.length; j++) {
				array[j - deleteCount] = array[j]
			}

			// ELIMINAMOS LO QUE NOS SOBRA MODIFICANDO LA LONGITUD DEL ARRAY
			array.length = array.length - deleteCount
		}

		const tmpArray = []
		for (let i = 0; i < args.length; i++) {
			if (array[i + startIndex] !== undefined) {
				tmpArray[i] = array[i + startIndex]
			}
			array[i + startIndex] = args[i]
		}

		for (let i = 0; i < tmpArray.length; i++) {
			array.length++
			array[array.length - 1] = tmpArray[i]
		}

		return result
	}catch(e) {
		console.log(e.message)
		throw e
	}
	

	
}

/* console.log(spliceFunction(meses, 1, 2, 'Sept', 'Oct', 'Nov'))
console.log(meses)
console.log(meses.length) */
// ['Enero', 'Sept', 'Oct', 'Nov' , 'Mayo', 'Ago']

/* console.log(spliceFunction(meses, 10, 5, 'Sept', 'Oct', 'Nov'))
console.log(meses)
console.log(meses.length) */
// ['Enero', 'Febrero', 'Marzo', 'Mayo', 'Ago', 'Sept', 'Oct', 'Nov']


/* console.log(spliceFunction(meses, -2, 3, 'Sept', 'Oct', 'Nov'))
console.log(meses)
console.log(meses.length) */
// ['Enero', 'Febrero', 'Marzo', 'Sept', 'Oct', 'Nov']

/* console.log(spliceFunction(meses, 2, 2, 'Sept', 'Oct', 'Nov'))
console.log(meses)
console.log(meses.length) */
// ['Marzo', 'Mayo']
// ['Enero', 'Febrero', 'Sept', 'Oct', 'Nov', 'Ago']

console.log(spliceFunction('Pepe', 2, 0, 'Sept', 'Oct', 'Nov'))
console.log(meses)
console.log(meses.length)
// []
// ['Enero', 'Febrero', 'Sept', 'Oct', 'Nov', 'Marzo', 'Mayo', 'Ago']