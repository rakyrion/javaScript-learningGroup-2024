

const printNotesFunction = (notesToPrint, sectionToPrint) => {
	notesToPrint.forEach(note => {
		if (note.userId === userLogged.id) {
			const noteContainer = document.createElement('div')
			noteContainer.classList.add('note')

			const textArea = document.createElement('textarea')
			textArea.classList.add('note-text-container')
			textArea.rows = 10
			textArea.cols = 20
			textArea.value = note.content

			noteContainer.appendChild(textArea)

			sectionToPrint.appendChild(noteContainer)
		}

	})
}