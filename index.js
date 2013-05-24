'use strict';

var exec = require('child_process').exec;

module.exports = function remote (cb) {
  exec('git remote -v', function (err, stdout, stderr) {
      if (err) return cb(err.stack);
      if (stderr) return cb(stderr);
      
      var m = stdout.match(
        /origin\s+(?:git@github\.com:|(?:https?|git):\/\/github\.com\/)(\S+)/
      );
      if (!m) return cb('no github remote found');
      cb(null, m[1].replace(/\.git$/, ''));
  });
};
