require('./evalCode')(
	require('node:fs')
		.readFileSync('./main.qua')
		.toString()
)