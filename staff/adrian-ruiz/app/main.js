const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,15}$/

const loginFunction = (email, password) => {
	// COMPROBACIONES
	if (typeof email !== 'string') throw new TypeError('Email is not a string.')
	if (email.trim().length < 5) throw new Error('Email length is not valid.')
	if (!emailRegex.test(email)) throw new Error('Email is not valid.')
	if (typeof password !== 'string') throw new TypeError('Password is not a string.')
	if (password.trim().length === 0) throw new Error('Password is empty.')
	if (password.length < 9 || password.length > 15) throw new Error('Password length is not valid.')

	// LÓGICA DE LA FUNCIÓN
	const foundUser = users.find(user => {
		return user.email === email
	})

	if (!foundUser) {
		console.log('Ha habido un error en la autenticación')
		alert('Ha habido un error en la autenticación')
		return false
	}

	if (foundUser.password !== password) {
		alert('Ha habido un error en la autenticación')
		console.log('Ha habido un error en la autenticación')

		return false
	}

	return true
}

const registerFunction = (name, email, password) => {
	// COMPROBACIONES
	if (typeof name !== 'string') throw new TypeError('Name is not a string.')
	if (name.length < 2) throw new Error('Name length is not valid')
	if (name.trim() === 0) throw new Error('Name is empty')
	if (typeof email !== 'string') throw new TypeError('Email is not a string.')
	if (email.trim().length < 5) throw new Error('Email length is not valid.')
	if (!emailRegex.test(email)) throw new Error('Email is not valid.')
	if (typeof password !== 'string') throw new TypeError('Password is not a string.')
	if (password.trim().length === 0) throw new Error('Password is empty.')
	if (password.length < 9 || password.length > 15) throw new Error('Password length is not valid.')
	if(!passRegex.test(password)) throw new Error('Password does not match regex: Must contain 1 uppercase letter, 1 lowercase letter, 1 number, 1 symbol and length between 9 and 15 characters')

	const emailAlreadyOnUse = users.find(user => {
		return user.email === email
	})

	if(emailAlreadyOnUse) throw new Error('Email is already registered.')

	const newUser = {
		name: name,
		email: email,
		password: password
	}

	users.push(newUser)

	return newUser
}

const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')

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
	try {
		const loginSucceed = loginFunction(email, password)

		if (loginSucceed) {
			console.log('EL USUARIO SE HA LOGEADO')
			homeSection.classList.remove('d-none')
			landingSection.classList.add('d-none')
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
	try{
		const newUser = registerFunction(name, email, password)

		if(newUser) {
			homeSection.classList.remove('d-none')
			landingSection.classList.add('d-none')
		}
	}catch(e) {
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