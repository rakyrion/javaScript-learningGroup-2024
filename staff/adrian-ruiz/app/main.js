

const loginFunction = (email, password) => {
	const foundUser = users.find(user => {
		return user.email === email
	})

	if(!foundUser) {
		console.log('Ha habido un error en la autenticación')
		alert('Ha habido un error en la autenticación')
		return false
	}

	if(foundUser.password !== password) {
		alert('Ha habido un error en la autenticación')
		console.log('Ha habido un error en la autenticación')

		return false
	}

	return true
}

const loginForm = document.getElementById('login-form')

const landingSection = document.getElementById('landing')
const homeSection = document.getElementById('home')
const loginFormSection = document.getElementById('login-form-section')
const registerFormSection = document.getElementById('register-form-section')

const registerLink = document.getElementById('register-link')
const loginLink = document.getElementById('login-link')

// SUBMIT LOGIN FORM
loginForm.addEventListener('submit', (event) => {
	// DE ESTA MANERA, EVITAMOS EL PARPADEO (REFRESCO) DE LA PÁGINA
	event.preventDefault()

	const email = loginForm.email.value
	const password = loginForm.password.value

	const loginSucceed = loginFunction(email, password)

	if(loginSucceed) {
		console.log('EL USUARIO SE HA LOGEADO')
		homeSection.classList.remove('d-none')
		landingSection.classList.add('d-none')
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