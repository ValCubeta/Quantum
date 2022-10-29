require('./evalCode')(
	require('node:fs')
		.readFileSync(
			process.argv.at(2)
		)
		.toString()
)