class Lexer {
	constructor(data) {
		this.data = data
		this.tokens = []
		this.keywords = [
			'print',
			'goto',
			'stop'
		]
	}
	tokenize() {
		for (const loc of this.data) {
			let tmp = []
			let tid = ''
			for (const l of loc) {
				if (l === '\'' && tid === '') {
					tid = 'string'
					tmp = []
				}
				else if (l === '\'' && tid === 'string') {
					this.tokens.push({ 'type': tid, 'value': ''.join(tmp) })
					tid = ''
					tmp = []
				}
				else if (l === ':') {
					this.tokens.push({ 'type': 'label', 'value': ''.join(tmp) })
					tmp = []
				}
				else if (this.keywords.includes(tmp.join(''))) {
					this.tokens.push({
						'type': 'keyword',
						'value': tmp.join('')
					})
					tmp = []
				}
				else if (l === '\n') {
					if (len(tmp) > 0) {
						this.tokens.push({
							'type': 'atom',
							'value': tmp.join('')
						})
						tmp = []
					}
				}
				else if (l in ' \t' && tid != 'string')
					continue
				else
					tmp.push(l)
			}
		}
	}
}

module.exports = { Lexer }