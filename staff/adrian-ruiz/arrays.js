// UN ARRAY ES UNA MATRIZ, QUE CONTIENE UN CONJUNTO DE VALORES QUE EN JAVASCRIPT TIENE UNA LONGITUD FLEXIBLE

const personas = ['Nagore','Olatz','Porti']
console.log('personas', personas)

// LOS ARRAYS TIENEN INDICE, QUE CORRESPONDEN AL LUGAR EN EL QUE SE ALMACENA CADA VALOR, EMPEZANDO POR 0

console.log('personas[1]', personas[1])

// AÑADIR ELEMENTOS A UN ARRAY
personas.push('Carmelo')

console.log('personas', personas)

personas.push('Alejandro', 'Juani', 'Victoria')

console.log('personas', personas)

// ELIMINAR ELEMENTOS DE UN ARRAY

// QUITAR ÚLTIMIO ELEMENTO
const victoria = personas.pop()

console.log('personas', personas)
console.log('victoria', victoria)

// QUITAR EL PRIMERO
const nagore = personas.shift()

console.log('personas', personas)
console.log('nagore', nagore)

// QUITAR UN INDICE CONCRETO

const alejandro = personas.splice(3, 1)
console.log('personas', personas)
console.log('alejandro', alejandro)


const test1 = ['Rojo', 'Azul', 'Verde']
const test2 = ['Amarillo', 'Naranja']

const test3 = test1.concat(test2)
test1[0] = 'Burdeos'

console.log('test1', test1)
console.log('test2', test2)
console.log('test3', test3)


// BUCLE FOR EACH
test3.forEach(color => {
	console.log('color', color)
})