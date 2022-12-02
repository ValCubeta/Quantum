const { main, use_seed, ranum } = require('../random/build/Release/random')

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
			]
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

const date = 2147483647 //Math.round(Date.now() / 999)
use_seed(date)
use_seed(1000)
console.log({ date })

for (let i = 0; i <= 100, 0; i++) {
	console.log('Random:', ranum())
}