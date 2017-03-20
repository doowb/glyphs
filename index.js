'use strict';

/**
 * Original list from https://github.com/enquirer/prompt-base/issues/5#issuecomment-286477541
 */

var cache = {};

/**
 * Map of semantic names to glyphs.
 *
 * ```js
 * console.log(require('glyphs'));
 * //=> {
 * //=>   ltbracket: '[',
 * //=>   rtbracket: ']',
 * //=>   ltparen: '(',
 * //=>   rtparen: ')',
 * //=>   ltangle: '<',
 * //=>   rtangle: '>',
 * //=>   ltbrace: '{',
 * //=>   rtbrace: '}',
 * //=>   bang: '!',
 * //=>   hash: '#',
 * //=>   dollar: '$$',
 * //=>   percent: '%',
 * //=>   ampersand: '&',
 * //=>   star: '*',
 * //=>   plus: '+',
 * //=>   comma: ',',
 * //=>   dot: '.',
 * //=>   slash: '/',
 * //=>   colon: ':',
 * //=>   semicolon: ';',
 * //=>   equal: '=',
 * //=>   qmark: '?',
 * //=>   at: '@',
 * //=>   backslash: '\\',
 * //=>   carat: '^',
 * //=>   underscore: '_',
 * //=>   backtick: '`',
 * //=>   bar: '|',
 * //=>   tilde: '~',
 * //=>   dash: '–',
 * //=>   apostrophe: '\'',
 * //=>   quote: '"'
 * //=> }
 * ```
 * @name glyphs
 * @api public
 */

var glyphs = {
  ltbracket: '[',
  rtbracket: ']',
  ltparen: '(',
  rtparen: ')',
  ltangle: '<',
  rtangle: '>',
  ltbrace: '{',
  rtbrace: '}',
  bang: '!',
  hash: '#',
  dollar: '$',
  percent: '%',
  ampersand: '&',
  and: '&',
  star: '*',
  asterick: '*',
  plus: '+',
  comma: ',',
  dot: '.',
  period: '.',
  slash: '/',
  colon: ':',
  semicolon: ';',
  equal: '=',
  qmark: '?',
  at: '@',
  backslash: '\\',
  carat: '^',
  underscore: '_',
  backtick: '`',
  bar: '|',
  tilde: '~',
  dash: '–',
  apostrophe: '\'',
  quote: '"',
};

define('byName', function() {
  return glyphs;
});

define('byGlyph', function() {
  return Object.keys(glyphs)
    .reduce(function(acc, key) {
      var val = glyphs[key];
      acc[val] = acc[val] || key;
      return acc;
    }, {});
});

function define(name, fn) {
  Object.defineProperty(glyphs, name, {
    enumerable: false,
    configurable: true,
    get: function() {
      if (cache[name]) {
        return cache[name];
      }
      return (cache[name] = fn());
    }
  });
}

module.exports = glyphs;
