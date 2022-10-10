/**
 * @description readline demo
 * @author 李唐
 */

const fs = require('fs')
const path = require('path')
const readline = require('readline')

function main() {
  let num = 0

  const logFile = path.join(__dirname, 'files', 'a.txt')
  const readStream = fs.createReadStream(logFile)
  const rl = readline.createInterface({
    input: readStream,
  })
  rl.on('line', (line) => {
    console.log('line', line)
    num++
  })
  rl.on('close', async () => {
    console.log('num', num)
  })
}
main()
