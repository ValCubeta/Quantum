module.exports = {
	global: {
		type: 'Object'
	},
	this: {
		type: 'Object'
	},
	write: {
		type: 'Function',
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
		type: 'Function',
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
		type: 'Function',
		args: [
			{
				name: 'code',
				type: 'Number'
				// (implicit) value = Number.__default
			}
		]
	},
	eval: {
		type: 'Function',
		args: [
			{
				name: 'string',
				type: 'String'
			}
		],
		returns: 'Any'
	},
	typeof: {
		type: 'Function',
		args: [
			{
				name: 'value'
			}
		],
		returns: 'String'
	},
	read: {
		type: 'Function',
		args: [
			{
				name: 'end',
				optional: true,
				type: 'String',
				value: '\\n',
			}
		],
		returns: 'String'
	},
	clear: {
		type: 'Function'
	},
	'null': {
		type: 'Void',
		value: 'null'
	},
	nanum: {
		type: 'Number',
		value: 'nanum'
	},
	infy: {
		type: 'Number',
		value: 'infy'
	}
}