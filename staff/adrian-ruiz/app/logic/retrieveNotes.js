

const retriveNotesFunction = (userId) => {
	// COMPROBACIONES DE SEGURIDAD
	if (typeof userId !== 'number') throw new TypeError('User id is not valid.')
	

	const notesFiltered = notes.filter(note => note.userId === userId)

	return notesFiltered
}