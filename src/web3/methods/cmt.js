const Eth = require("web3/lib/web3/methods/eth")
const Method = require("web3/lib/web3/method")
const formatters = require("../formatters")

// inherit and extend Eth
const Cmt = function(web3) {
  Eth.call(this, web3)

  var self = this
}

Cmt.prototype = Object.create(Eth.prototype)
Cmt.prototype.constructor = Cmt

module.exports = Cmt
