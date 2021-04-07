# fb-utils-node

Form Builder utility methods

## Installing

``` shell
npm install @ministryofjustice/fb-utils-node
```

## Usage

``` js
const FBUtils = require('@ministryofjustice/fb-utils-node')
```

## Methods

### logger

``` js
FBUtils.logger(...args)
```

### clone

Returns a shallow copy of any object

``` js
const clonedObj = FBUtils.clone(obj)
```

Objects can be of any type.

By default, the object copy is shallow.

To create a deep copy, pass 

``` js
const deeplyClonedObj = FBUtils.clone(obj, true)
```

### FBError

Base class for errors

``` js
class MyError extends FBError {}

throw new MyError('An error occurred', {
  data: additionalData
})

```


## Testing

``` shell
npm test
# Test output is in [TAP](https://testanything.org/) format
```

Run unit tests only

``` shell
npm run test:unit
```

Run linting only

``` shell
npm run lint
```
