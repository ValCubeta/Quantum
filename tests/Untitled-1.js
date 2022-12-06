
/**
 * @param {string} code the code
 * @param {object} ctx context
 */
function evalCode(code, ctx = {}) {
	const tokens = []
	const token = {}
	for (const i in code) {
		const char = code[i]
		if (!token.type) {
			token.type = ttype(char)
			token.text = char
		}
		// tokens.push(token)
	}
	
	//
	let level = 0
	const scopes = []
}

/**
 * array to enum
 * @param {string[]} arr the source array
 * @returns {{ [key: string]: number }} the enum
 */
function E(arr) {
	if (!Array.isArray(arr)) {
		console.error('arr must be an array')
		process.exit(1)
	}
	const result = {}
	for (const i in arr) {
		result[arr[i]] = i
	}
	return result
}

const TypesSrc = [
	'value',
	'void',
	'any',
	'bool',
	'num',
	'str',
	'arr',
	'obj',
	'func',
	'regex'
]
const Types = E(TypesSource)

const TTypesSrc = [
	'return',
	'newLine',
	'space',
	'tab',
	'wordStart',
	'word',
	'numWithPoint',
	'numWithSeparator',
	'num',
]
const TTypes = E(TTypesSrc)

function ttype(char) {
	if (char === ' ') return TTypes.space
	if (char === '\t') return TTypes.tab
	if (char === '\n') return TTypes.newLine
	if (char === '\r') return TTypes.return
	if (char === '[') return TTypes.arr
	if (char === '(') return TTypes.groupOrTuple
	if (/^[A-Za-z_]$/.test(char)) return TTypes.wordStart
	if (/^[0-9]$/.test(char)) return TTypes.num
}

const file = 'fun main!:\n\tprint("hello")'

console.log(
	evalCode('hello\r\n\r\n\t12_3.456')
)