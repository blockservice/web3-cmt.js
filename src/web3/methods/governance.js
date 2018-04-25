var utils = require("web3/lib/utils/utils")
var Property = require("web3/lib/web3/property")
var Method = require("web3/lib/web3/method")
var formatters = require("../formatters")

/**
 * @namespace web3.governance
 */

var Governance = function(web3) {
  this._requestManager = web3._requestManager

  var self = this
  methods().forEach(function(method) {
    method.attachToObject(self)
    method.setRequestManager(self._requestManager)
  })

  properties().forEach(function(p) {
    p.attachToObject(self)
    p.setRequestManager(self._requestManager)
  })
}

var methods = function() {
  var propose = new Method({
    name: "propose",
    call: "cmt_propose",
    params: 1,
    inputFormatter: [formatters.inputTransactionFormatter]
  })
  var vote = new Method({
    name: "vote",
    call: "cmt_vote",
    params: 1,
    inputFormatter: [formatters.inputTransactionFormatter]
  })
  var queryProposals = new Method({
    name: "queryValidators",
    call: "cmt_queryValidators",
    params: 0
  })

  return [propose, vote, queryProposals]
}

var properties = function() {
  return []
}

module.exports = Governance