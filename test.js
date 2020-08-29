const { equal } = require('assert')
const { it, describe } = require('./index')

const waitASec = () => new Promise(resolve => setTimeout(resolve, 1000))

describe('Describe 1', async () => {
  await it('It 1', async () => {
    await waitASec()
    equal(1, 1)
  })
  await describe('Describe 1.1', async () => {
    await it('It 1.1.1', async () => {
      await waitASec()
      equal(1, 1)
    })
    await it('It 1.1.2', async () => {
      await waitASec()
      equal(1, 1)
    })
    await it('It 1.1.3', async () => {
      await waitASec()
      equal(1, 1)
    })
  })
})

