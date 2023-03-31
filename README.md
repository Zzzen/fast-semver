# fast-semver

a fast semver parser and comparator based on [rust semver](https://github.com/dtolnay/semver).

## Usage

```js
// only satisfies is supported for now
import { satisfies } from 'fast-semver'

satisfies("1.0.0", "^1.0.0") // true
```

## Benchmarks

```sh
yarn bench
```

Result on my machine:
```
Running "satisfies" suite...
Progress: 100%

  Native:
    675 740 ops/s, ±6.62%   | fastest

  JavaScript :
    153 463 ops/s, ±1.38%   | slowest, 77.29% slower
```


## Acknowledgements
[semver](https://github.com/dtolnay/semver)  
[napi-rs](https://github.com/napi-rs/napi-rs)
