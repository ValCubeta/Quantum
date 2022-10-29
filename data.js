const evalCode = require('./evalCode')

const data = {
	write({ values = [], sep = '', end = ''}) {
		process.stdout.write(values.join(sep))
		process.stdout.write(end)
	},
	print({ values = [], sep = ' ', end = '\r\n' }) {
		functions.write({ values, sep, end })
	},
	exit({ code }) {
		process.exit(code)
	},
	eval({ code }) {
		return evalCode(code)
	}
}

data.global = data
data.this = data

module.exports = data