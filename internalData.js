module.exports = {
	global: {
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
	}
}