const { main, use_seed, get_seed, ranum } = require('./cpp/random/build/Release/random')

main() // set the default seed

module.exports = {
	use_seed: {
		data: {
			type: 'function',
			params: [
				{
					name: 'seed',
					type: 'num'
				}
			]
		},
		value({ seed } = {}) {
			use_seed(Math.round(seed))
		}
	},
	get_seed: {
		data: {
			type: 'function',
			returns: 'num'
		},
		value() {
			return get_seed()
		}
	},
	ranum: {
		data: {
			type: 'function',
			params: [
				{
					name: 'x',
					optional: true,
					type: 'num'
				},
				{
					name: 'y',
					optional: true,
					type: 'num'
				}
			],
			returns: 'num'
		},
		value({ x, y } = {}) {
			if (typeof x !== 'number')
				return ranum()
			const a = Math.round(x)
			const b = Math.round(y)
			if (typeof y !== 'number')
				return ranum(...(a >= 0 ? [0, a] : [a, 0]))
			else
				return ranum(...(a <= b ? [a, b] : [b, a]))
		}
	}
}