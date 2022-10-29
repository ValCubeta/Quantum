const { Lexer } = require('./lexer')
const { Parser } = require('./parser')
const { Evaluator } = require('./evaluator')

const file = readFileSync('../main.qua').toString()
const lexer = new Lexer(file)
lexer.tokenize()
const parser = new Parser(lexer.tokens)
const evaluator = new Evaluator(parser.ast)

console.log('Tokens:', lexer.tokens)

parser.buildAST()
console.log('AST:', parser.ast)


console.log('Output:')
evaluator.run(parser.ast)