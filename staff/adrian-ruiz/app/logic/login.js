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

	return foundUser
}