"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})

var _Survey = require("./Survey")

Object.keys(_Survey).forEach(function(key) {
  if (key === "default" || key === "__esModule") return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function() {
      return _Survey[key]
    }
  })
})
