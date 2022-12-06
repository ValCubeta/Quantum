class Parser {
  constructor(tokens) {
    this.tokens = tokens
    this.ast = []
	}
  addnode(parent, node) {
    for (const a in this.ast) {
      if (a.includes(parent)) {
				a[parent].push(node)
			}
		}
	}
  buildAST() {
    saved   = {}
    parent  = {}
    collect = false
    for (const token of this.tokens):
      if token.type == "label":
        t = {token.value: []}
        if parent != t:
          parent = token.value
          this.ast.push(t)
      else if token.type == "keyword":
        if token.value == "stop":
          t = { token.value: 0 }
          this.addnode(parent, t)
        else:
          if collect == false:
            saved   = token
            collect = true
          else:
            t = { [saved.value]: token.value }
            this.addnode(parent, t)
            collect = false
      else if token.type == "string" or token.type == "atom":
        if collect == false:
          saved   = token
          collect = true
        else:
          t = { [saved.value]: token.value }
          this.addnode(parent, t)
          collect = false
	}
}

module.exports = { Parser }