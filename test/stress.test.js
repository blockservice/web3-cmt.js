const async = require("async")
const expect = require("chai").expect
const Web3 = require("../src/index")
const { Settings, Wallet } = require("./constants")

let web3

const transfer = (f, t, v) => {
  // send
  let payload = {
    from: f,
    to: t,
    value: v
  }
  async.times(1000, (n) => {
    payload.value = n + 1
    web3.cmt.sendTransaction(payload, (err, result) => {
      if (!err) {
        console.log(result)
      } else {
        console.log(err)
      }
    })
  })
}

describe("Transaction Test", function() {
  before(function() {
    web3 = new Web3(new Web3.providers.HttpProvider(Settings.Provider))
  })

  describe("Free CMT TX from A to B to C to D", function() {
    it("From A to B", function() {
      web3.personal.unlockAccount(Wallet[0].Addr, Wallet[0].Password)
      transfer(Wallet[0].Addr, Wallet[1].Addr, 1)
    })
  })
})
