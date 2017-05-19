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

Jest doesn't support passing in options to transformers through their config, so you can define a `.bublerc` JSON file with your buble options:

```json
// .bublerc
{
  "objectAssign": "Object.assign"
}
```
