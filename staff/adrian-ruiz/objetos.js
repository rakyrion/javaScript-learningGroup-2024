// ES UN CONJUNTO DE PROPIEDADES, A LAS QUE ESPECIFICAMOS EL NOMBRE JUNTO A UN VALOR, QUE PUEDE SER CUALQUIER TIPO DE DATO

const edades = {
	olatz: 22,
	nagore: 27,
	porti: 27
}

console.log('edades', edades)

console.log('edades.olatz', edades.olatz)

const personas = {
	olatz: {
		edad: edades.olatz,
		genero: 'F',
		profesion: 'Recepcionista',
		hobbies: ['Dormir', 'Comer']
	},
	porti: {
		edad: edades.porti,
		genero: 'M',
		profesion: 'Programdor',
		hobbies: ['Dormir', 'Padel', 'Videojuegos']
	}
}

personas.olatz.edad = 85
personas.olatz.hobbies.push('Ganar dinero')

console.log('personas', personas)