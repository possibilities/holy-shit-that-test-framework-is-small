const { equal } = require('assert')
const test = require('./index')

const waitASec = () => new Promise(resolve => setTimeout(resolve, 1000))

test('Describe 1', async () => {
  await test('It 1', async () => {
    await waitASec()
    equal(1, 1)
  })
  await test('Describe 1.1', async () => {
    await test('It 1.1.1', async () => {
      await waitASec()
      equal(1, 1)
    })
    await test('It 1.1.2', async () => {
      await waitASec()
      equal(1, 1)
    })
    await test('It 1.1.3', async () => {
      await waitASec()
      equal(1, 1)
    })
  })
})

