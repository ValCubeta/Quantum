const to_string = require('./to_string')

module.exports = {
	'throw'(value, stack) {
		console.log(to_string(value))
		console.log(stack)
		exit(1)
	}
}