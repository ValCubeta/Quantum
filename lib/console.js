const readLine = require('../read-line/build/Release/read').read

module.exports = {
	write: {
		data: {
			type: 'function',
			params: [
				{
					rest: true,
					name: 'values'
				}
			]
		},
		value: ({ values = [] } = {}) => {
			process.stdout.write(values.join(''))
		}
	},
	read: {
		data: {
			type: 'function',
			returns: 'str'
		},
		value: () => {
			return readLine()
		}
	},
	clear: {
		data: {
			type: 'function'
		},
		value: () => {
			console.clear()
		}
	}
}

/* module.exports.write.value({ values: ['What is your name?', ' '] })
const name = module.exports.read.value()
module.exports.write.value({ values: [`Hello ${name}!`, '\r\n'] }) */