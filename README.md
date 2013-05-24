# resolve-git-remote

Resolves the remote url of the local git repository in the current folder.

## Status

In the works.

## Disclaimer

Code lifted from [travisify](https://github.com/substack/travisify).

```js
var remote = require('resolve-git-remote');

remote(function (err, remote) {
  // err will be set if no remote was found
  console.log(remote); 
});
```
