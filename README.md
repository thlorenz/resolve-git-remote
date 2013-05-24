# resolve-git-remote [![build status](https://secure.travis-ci.org/thlorenz/resolve-git-remote.png)](http://travis-ci.org/thlorenz/resolve-git-remote)

Resolves the remote url of the local git repository in the current folder.

    npm install resolve-git-remote

```js
var remote = require('resolve-git-remote');

remote(function (err, remote) {
  // err will be set if no remote was found
  console.log(remote);  // => 'thlorenz/resolve-git-remote'
});
```

## Disclaimer

Code lifted from [travisify](https://github.com/substack/travisify).
