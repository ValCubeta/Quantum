module.exports = {
	global: {
		type: 'obj'
	},
	this: {
		type: 'obj'
	},

	null: {
		type: 'void',
		value: 'null'
	},
	nanum: {
		type: 'num',
		value: 'nanum'
	},
	infy: {
		type: 'num',
		value: 'infy'
	},

	write: {
		type: 'function',
		params: [
			{
				rest: true,
				name: 'values'
				// (implicit) type = T[]
			},
			{
				name: 'sep',
				type: 'str'
				// (implicit) value = str.__default
			},
			{
				name: 'end',
				type: 'str'
			}
		]
	},
	print: {
		type: 'function',
		params: [
			{
				rest: true,
				name: 'value'
			},
			{
				name: 'sep',
				type: 'str',
				value: `' '`
			},
			{
				name: 'end',
				type: 'str',
				value: `'\\r\\n'`
			}
		]
	},
	exit: {
		type: 'function',
		args: [
			{
				name: 'code',
				type: 'num'
				// (implicit) value = num.__default
			}
		]
	},
	eval: {
		type: 'function',
		args: [
			{
				name: 'string',
				type: 'str'
			}
		]
	},
	typeof: {
		type: 'function',
		args: [
			{
				name: 'value'
			}
		],
		returns: 'str'
	},
	read: {
		type: 'function',
		returns: 'str'
	},
	clear: {
		type: 'function'
	}
}