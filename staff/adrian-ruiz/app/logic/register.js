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
	if (!passRegex.test(password)) throw new Error('Password does not match regex: Must contain 1 uppercase letter, 1 lowercase letter, 1 number, 1 symbol and length between 9 and 15 characters')

	const emailAlreadyOnUse = users.find(user => {
		return user.email === email
	})

	if (emailAlreadyOnUse) throw new Error('Email is already registered.')

	const newUser = {
		name: name,
		email: email,
		password: password
	}

	users.push(newUser)

	return newUser
}