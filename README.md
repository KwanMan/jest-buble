# jest-buble

Jest plugin to use buble for transformation.

## Usage

    $ yarn add --dev jest-buble buble

In your package.json:
```json
  "jest": {
    "transform": {
      "^.+\\.js$": "jest-buble"
    }
  }
```

### Configuring buble

Jest doesn't support passing in options to transformers, so you can initialise `jest-buble` in another file first:

```js
// jest.transform.js
const createTransformer = require('jest-buble')

module.exports = createTransformer({
  objectAssign: 'Object.assign'
})
```

then for the jest config:

```json
  "jest": {
    "transform": {
      "^.+\\.js$": "./jest.transform.js"
    }
  }
```