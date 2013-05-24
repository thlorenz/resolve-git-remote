'use strict';
/*jshint asi: true */

var test = require('tap').test
var resolve = require('..')

test('full', function (t) {
  resolve(function (err, remote) {
    t.notOk(err, 'no error')
    t.equal(remote, 'thlorenz/resolve-git-remote', 'resolves correct remote')
    t.end()
  })
})
