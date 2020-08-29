const spaces = (number, item) => Array(number * 2).fill(' ').join('')

const test = async (desc, handler) => {
  try {
    console.info(spaces(test.stack.length) + desc)
    test.stack.push(desc)
    await handler()
    test.stack.pop()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

test.stack = []

const it = test
const describe = test

module.exports = { it, describe }
