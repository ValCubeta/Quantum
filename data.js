const evalCode = require('./evalCode')
const readLine = require('./read-line/build/release/read').read
const typeOf = require('./typeof')

const data = {
	print({ values = [], sep = ' ', end = '\n' } = {}) {
		process.stdout.write(values.join(sep))
		process.stdout.write(end)
	},
	exit({ code } = {}) {
		process.exit(code)
	},
	eval({ string } = {}) {
		return evalCode(string)
	},
	typeof({ value } = {}) {
		return typeOf(value)
	}
}

data.global = data

module.exports = data