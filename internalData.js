module.exports = {
	global: {
		type: 'object',
		write: false
	},
	this: {
		type: 'object',
		write: false
	},
	write: {
		type: 'function',
		params: [
			{
				name: 'values',
				rest: true
				// (implicit) type = Any[]
			},
			{
				name: 'sep',
				type: 'String'
				// (implicit) value = String.__default
			},
			{
				name: 'end',
				type: 'String'
			}
		]
	},
	print: {
		type: 'function',
		params: [
			{
				name: 'value',
				rest: true
			},
			{
				name: 'sep',
				type: 'String',
				value: `' '`
			},
			{
				name: 'end',
				type: 'String',
				value: `'\\r\\n'`
			}
		]
	},
	exit: {
		type: 'function',
		args: [
			{
				name: 'code',
				type: 'Number'
				// (implicit) value = Number.__default
			}
		]
	},
	eval: {
		type: 'function',
		args: [
			{
				name: 'string',
				type: 'string'
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
		returns: 'String'
	},
	test: {
		type: 'Number'
	}
}