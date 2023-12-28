
const nombre = 'Olatz'
const apellido = 'Quevedo'
console.log(nombre.toLowerCase())

console.log(nombre.toUpperCase())

console.log(nombre.includes('O'))

if (nombre.includes('o')) {
	console.log('Olatz incluye la O')
}

const fullName = nombre.concat(' ', apellido)
console.log('fullName', fullName)

const test = fullName.split(' ')
console.log('test', test)

const lastName = test[1]
console.log('lastName', lastName)

console.log(fullName.length)

console.log(apellido.replaceAll('e', 'fasfasgasfg'))