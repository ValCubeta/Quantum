const evalCode = require('./evalCode')
const readLine = require('./read-line/build/release/read').read
const typeOf = require('./typeof')

const data = {
	write({ values = [], sep = '', end = '' } = {}) {
		process.stdout.write(values.join(sep))
		process.stdout.write(end)
	},
	print({ values = [], sep = ' ', end = '\r\n' } = {}) {
		data.write({ values, sep, end })
	},
	exit({ code } = {}) {
		process.exit(code)
	},
	eval({ string } = {}) {
		return evalCode(string)
	},
	read() {
		return readLine()
	},
	clear() {
		console.clear()
	},
	typeof({ value } = {}) {
		return typeOf(value)
	}
}

data.global = data

module.exports = data