// COMMONJS import structure

const someFunction = require('something...')

module.exports = someFunction

const { fct1, fct2, fct3 } = require('something-else')

module.exports = { fct1, fct2, fct3 }

// ES6+ Import syntax

import someFunction from "something"

export default someFunction

import { fct1, fct2, fct3 } from 'something-else'

export const fct1
export const fct2
export const fct3