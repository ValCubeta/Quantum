module.exports = {
	global: {
		type: 'object'
	},
	this: {
		type: 'object'
	},
	write: {
		type: 'function',
		params: [
			{
				rest: true,
				name: 'values'
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
				rest: true,
				name: 'value'
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
	read: {
		type: 'function',
		args: [
			{
				name: 'end',
				optional: true,
				type: 'String',
				value: '\\n',
			}
		]
	}
}