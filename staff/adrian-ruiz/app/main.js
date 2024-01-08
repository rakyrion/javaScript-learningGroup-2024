
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,15}$/


const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')

const landingSection = document.getElementById('landing')
const homeSection = document.getElementById('home')
const loginFormSection = document.getElementById('login-form-section')
const registerFormSection = document.getElementById('register-form-section')

const registerLink = document.getElementById('register-link')
const loginLink = document.getElementById('login-link')

const helloUserP = document.getElementById('hello-user')

const notesSection = document.getElementById('notes-section')

let userLogged

// SUBMIT LOGIN FORM
loginForm.addEventListener('submit', (event) => {
	// DE ESTA MANERA, EVITAMOS EL PARPADEO (REFRESCO) DE LA PÁGINA
	event.preventDefault()

	const email = loginForm.email.value
	const password = loginForm.password.value
	try {
		const user = loginFunction(email, password)

		if (user) {
			userLogged = user
			homeSection.classList.remove('d-none')
			landingSection.classList.add('d-none')

			/* helloUserP.textContent = "Hello" + " " + user.name */
			helloUserP.textContent = `Hello, ${user.name}`

			const notesFiltered = retriveNotesFunction(user.id)

			printNotesFunction(notesFiltered, notesSection)
		}
	} catch (e) {
		alert(e.message)
	}

})

// SUBMIT REGISTER FORM
registerForm.addEventListener('submit', (e) => {
	e.preventDefault()

	const name = registerForm.firstname.value
	const email = registerForm.email.value
	const password = registerForm.password.value
	try {
		const newUser = registerFunction(name, email, password)

		if (newUser) {
			userLogged = newUser
			homeSection.classList.remove('d-none')
			landingSection.classList.add('d-none')
			helloUserP.textContent = `Hello, ${newUser.name}`

			const notesFiltered = retriveNotesFunction(user.userId)

			printNotesFunction(notesFiltered, notesSection)
		}
	} catch (e) {
		alert(e.message)
	}

})

// EVENT CLICK REGISTER (NAVEGAR A REGISTRO)
registerLink.addEventListener('click', (event) => {
	event.preventDefault()

	loginFormSection.classList.add('d-none')
	registerFormSection.classList.remove('d-none')
})

// EVENT CLICK LOGIN (NAVEGAR A LOGIN)
loginLink.addEventListener('click', (e) => {
	e.preventDefault()

	loginFormSection.classList.remove('d-none')
	registerFormSection.classList.add('d-none')
})



