const { read } = require('./build/Release/read')

process.stdout.write('Insert your name: ')
const input = read()
console.log(`Your name is: ${input}`)