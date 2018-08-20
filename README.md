
node-cryptonight
> node bindings for moneroV7 cryptonight hashing

### Requirements

node-cryptonight requires [Boost](http://www.boost.org)

##### Ubuntu

    sudo apt-get install libboost-all-dev

##### Mac

    brew install boost
    
    
##### [Windows #1] Downloads Boost library and windows-build-tools 

You need to install windows-build-tools(recommended version is msvc2015), and boost library 

* [Download Boost libray](https://www.boost.org/users/history/)   
* Locate boost library under C:/boost


##### [Windows #2] build

    npm install --global --production windows-build-tools
    
    node-gyp configure --msvs_version=2015

    locate boost library under C:/boost
    'conditions': [
          [
            'OS=="win"', 
              {
                'include_dirs': [
                  "C:/boost" 
                ] 
              }
          ] 
       ],
    
### Installation

    npm install --save node-cryptonight
   
### Testing

Code is linted with [standard](https://github.com/standard/standard) and tested with [Jest](https://github.com/facebook/jest). Run `npm test` to lint and run tests.

### Usage Examples

##### Synchronous Hashing

```js
const cryptonight = require('node-cryptonight').hash
const hash = cryptonight(Buffer.from('This is a test'))
console.log(hash) // <Buffer a0 84 f0 1d 14 37 ..>
```

##### Asynchronous Hashing

```js
const cryptonight = require('node-cryptonight').asyncHash
cryptonight(Buffer.from('This is a test'), hash => {
  console.log(hash) // <Buffer a0 84 f0 1d 14 37 ..>
})
```

##### Promise Wrapper Example

```js
function cryptonight(data) {
  return new Promise((resolve, reject) => {
    require('node-cryptonight').asyncHash(data, hash => {
      resolve(hash)
    })
  })
}

cryptonight(Buffer.from('This is a test'))
  .then(console.log) // <Buffer a0 84 f0 1d 14 37 ..>
```

### See Also

* [node-cryptonight-lite](https://github.com/ExcitableAardvark/node-cryptonight-lite)

### License

Released under the 3-Clause BSD License. Contains code from the Monero project. See `LICENSE` for more information.

