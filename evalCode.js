const internalData = require('./internalData')
const data = require('./data')

function getData(id) {
	if (!(id in data))
		evalCode(`throw ReferenceError('${id} is not defined')`)
	return {
		props: internalData[id],
		value: data[id]
	}
}

function setData(id, value, props) {
	realProps = typeof props === 'object' ? props : getProperties(value)
	if (id in internalData) {
		if (internalData[id].write === false)
			evalCode(`throw TypeError('assignment to constant variable')`)
		if (internalData[id].type !== realProps.type) {
			evalCode(`throw TypeError('type ${realProps.type} is not assignable to type ${internalData[id].type}')`)
		}
	}
	internalData[id] = realProps
	data[id] = value
}

const parse = require('./parse')
const createAST = require('./createAST')

function evalCode(string, context) {
	const tokens = parse(string)
	const ast = createAST(tokens)
}

module.exports = evalCode