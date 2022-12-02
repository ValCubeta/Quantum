const randomcpp = require('../random/build/Release/random')

randomcpp.main() // set the default seed

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
			randomcpp.use_seed(seed)
		}
	},
	random: {
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
			if (typeof x !== 'number') return randomcpp.random()
			if (typeof y !== 'number') return randomcpp.random(0, )
			return randomcpp.random(x, y)
		}
	}
}

randomcpp.use_seed(500)

for (let i = 0; i <= 100; i++) {
	console.log('Random:', randomcpp.random())
}