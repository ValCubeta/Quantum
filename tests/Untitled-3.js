const TokenTypes = [
	'eol',    // \n
	'space',
	'tab',

	'keyword',    // if else etc
	'identifier',

	'string',
	'regexp',
	'comment',    // not included in the token list

	'number',

	'operator',    // +-*/ etc
	'symbol',    // ([{:; etc
]

const ValueTypes = [
	'value',    // any | void
	'void',    // empty | null
	'any',    // anything that is not void
	'bool',
	'num',
	'str',
	'regexp',
	'obj',
	'arr',
	'function',
]

// `and`, `or`, etc. must be keywords or operators?