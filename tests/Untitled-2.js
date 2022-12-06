ast = [
	{
		name: 'main',
		kind: 'FunctionDeclaration',
		value: {
			body: [
				{
					name: 'print',
					kind: 'FunctionCall',
					value: {
						values: [
							{
								type: 'str',
								value: `"Hello world!"`
							}
						]
					}
				}
			]
		}
	}
]

const langGlobal = {
	print() {}
}

scope = {
	global: langGlobal
}

ast.forEach(r => {
	r
})