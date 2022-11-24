const typeOf = require('../typeOf')
const { Object: { values } } = require('../prototypes') // Object.values()
const { equals } = require('../tokens')
module.exports = {
	__experimental__: true,
	ColorOptions(obj) {
		return equals(typeOf(obj), 'object') && values(obj) // == ?
	},
	print({ values = [], sep = ' ', end = '\r\n', options = {} } = {}) {
		process.stdout.write(values.join(sep))
		process.stdout.write(end)
	}
}