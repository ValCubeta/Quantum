function splitByLength(string, length) {
	const result = []
	let lineIndex = 0
	let line = ''
	for (const i in string) {
		line += string.at(i)
		lineIndex++
		if (lineIndex === length) {
			result.push(line)
			lineIndex = 0
			line = ''
		}
	}
	if (line) result.push(line)
	return result
}

function table(obj) {
	let maxKeySize = 'Key'.length
	let maxValueSize = 'Value'.length
	const maxLength = process.stdout.columns / 2 - 7    // quit the separators length
	for (const key in obj) {
		const valueLength = `${obj[key]}`.length

		if (key.length > maxLength && valueLength > maxLength) {
			maxKeySize = maxLength
			maxValueSize = maxLength
			break
		}

		if (key.length > maxKeySize) maxKeySize = key.length
		if (valueLength > maxValueSize) maxValueSize = valueLength
	}
	const body = []
	for (const key in obj) {
		const value = `${obj[key]}`
		const row = []
		if (key.length > maxLength / 2) {
			splitByLength(key, maxLength / 2).map(line =>  `│ ${} │ ${} │`) bro idk im dying
		}
		if (value.length > maxLength / 2) {
			splitByLength(value, maxLength / 2)
		}
		body.push(row.join('\n'))
	}
	console.log(
		[
			'┌─' + ''.padEnd(maxKeySize, '─') + '─┬─' + ''.padEnd(maxValueSize, '─') + '─┐',
			'│ ' + 'Key'.padEnd(maxKeySize, ' ') + ' │ ' + 'Value'.padEnd(maxValueSize, ' ') + ' │',
			'├─' + ''.padEnd(maxKeySize, '─') + '─┼─' + ''.padEnd(maxValueSize, '─') + '─┤',
			body.map(row => row.join('\n')).join('\n'),
			'└─' + ''.padEnd(maxKeySize, '─') + '─┴─' + ''.padEnd(maxValueSize, '─') + '─┘'
		].join('\n')
	)
}

const start = Date.now()
table({ columns: process.stdout.columns })
console.log({ time: `${Date.now() - start} ms` })
