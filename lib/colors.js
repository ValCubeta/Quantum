const { typeof: typeof_ } = require('../data')
const { Object: values } = require('../prototypes')
const { '==': equals } = require('../tokens')
module.exports = {
	ColorOptions(obj) {
		return typeof_(obj) === 'object' && values(obj)
	},
	print({ values = [], sep = ' ', end = '\r\n', options } = {}) {
		process.stdout.write(values.join(sep))
		process.stdout.write(end)
	} 
}