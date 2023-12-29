

const nombres = ['Olatz', 'Nagore', 'Porti']

// PUSH

nombres.push('Carmelo')

// POP

const lastElement = nombres.pop()

console.log('nombres', nombres)
// FIND

const encontrado = nombres.find(nombre => {
	return nombre.includes('r')
})

console.log(encontrado)