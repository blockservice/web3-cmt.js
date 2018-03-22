const async = require("async")
const Web3 = require("../src/index")
const { Settings, Wallet } = require("./constants")

let web3 = new Web3(new Web3.providers.HttpProvider(Settings.Provider))
web3.personal.unlockAccount(Wallet[0].Addr, Wallet[0].Password)

// send
let payload = {
  from: Wallet[0].Addr,
  to: Wallet[1].Addr,
  value: 0
}
async.times(2, (n) => {
  payload.value = n + 1
  web3.cmt.sendTransaction(payload, (err, result) => {
    if (!err) {
      console.log(result)
    } else {
      console.log(err)
    }
  })
})
