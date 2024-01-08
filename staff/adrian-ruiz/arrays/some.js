const numbers = [45, 65, 18, 76, 98, 34]

function someFunction (array, callbackFunction) {

}

function checkAge1(age) {
	return age >= 90
}

function checkAge2(age) {
	return age < 18
}

console.log(someFunction(numbers, checkAge1))
// true

console.log(someFunction(numbers, checkAge2))
// false