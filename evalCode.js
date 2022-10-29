const internalData = require('./internalData')
const data = require('./data')

function getData(id) {
	if (!(id in data))
		data.eval(`throw ReferenceError('${id} is not defined')`)
	return {
		props: internalData[id],
		value: data[id]
	}
}

function setData(id, value, props) {
	realProps = typeof props === 'object' ? props : getProperties(value)
	if (id in internalData) {
		if (internalData[id].write === false)
			data.eval(`throw TypeError('assignment to constant variable')`)
		if (internalData[id].type !== realProps.type) {
			data.eval(`throw TypeError('type ${realProps.type} is not assignable to type ${internalData[id].type}')`)
		}
	}
	internalData[id] = realProps
	data[id] = value
}

const tokens = []
let token = { value: '' }
const ast = []

const tokenType = require('./tokenType')

module.exports = function (code) {
	console.log(`Evaluating code...`)
	for (const i in code) {
	const char = code.at(i)
	/* if (token.value === '') {
		token.value += char
		token.type = tokenType(char) */
	}
	eval(code)
	console.log('\tDone')
}