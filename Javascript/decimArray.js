//soma números (inteiros) sem usar nenhum operador matemático
const readline = require('readline')

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const rl = readline.createInterface(process.stdin, process.stdout)

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer)
    })
  })
}

async function main() {
  let a = await question("Escolha um número: ")
  a = String(a).split('').reverse()

  let b = await question("Escolha outro número: ")
  b = String(b).split('').reverse()

  a.length > b.length ? hardSum(a, b) : hardSum(b, a)

  rl.close()
}

function hardSum(a, b) {
  let add1 = false
  const result = []
  while (b.length !== 0) {
    let count = numbers.slice(a[0])
    count = count.concat(numbers.slice(1, a[0]), a[0])
    count = add1 ? count.slice(1) : count
    
    let unit = count[b[0]]
    console.log(count, unit)
    result.push(unit)

    add1 = numbers.indexOf(unit) <= numbers.indexOf(a[0]) && b[0] != 0 ? true : false
    a.shift()
    b.shift()
  }

  while (a.length !== 0) {
    if (add1) {
      let shiftNumbs = numbers.slice(1)
      result.push(shiftNumbs[a[0]])
      add1 = shiftNumbs[a[0]] == 0 ? true : false
    } else {
      result.push(a[0])
    }
    a.shift()
  }
  if (add1) {
    result.push("1")
  }
  console.log(`Resultado: ${result.reverse().join('')}`)
}

main()