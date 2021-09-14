# OO: Concatenative Inheritance
- Resource URL: https://medium.com/javascript-scene/the-heart-soul-of-prototypal-oo-concatenative-inheritance-a3b64cb27819
- jQuery, Underscore, Lodash, ES6 'Object' are the most commonly used libraries in the JS world. All of them contain an utility
for concatenative inheritance.

1. What is concatenative inheritance ?
```
A.: the process of combining the properties of 1 or more source objects into 
a new destination object. (most used form of inheritance in JS)

// Object.assign() is a drop-in replacement for this
// in ES6:
var assign = require('lodash/object/assign');

var defaults2 = {
    bar: 'no',
    baz: 'works!'
  };

function foo2 (options) {
  var settings = assign({}, defaults2, options),
    bar = settings.bar,
    baz = settings.baz;

  return (bar + ', ' +baz);
}

console.log(foo2({
  bar: 'yay'
})); // logs 'yay, works!'
```
2. Object Composition
- Achieved by using concatenative inheritance
```
// Composition Example

// http://codepen.io/ericelliott/pen/XXzadQ?editors=001
// https://gist.github.com/ericelliott/fed0fd7a0d3388b06402

const distortion = { distortion: 1 };
const volume = { volume: 1 };
const cabinet = { cabinet: 'maple' };
const lowCut = { lowCut: 1 };
const inputLevel = { inputLevel: 1 };

const GuitarAmp = (options) => {
  return Object.assign({}, distortion, volume, cabinet, options);
};

const BassAmp = (options) => {
  return Object.assign({}, lowCut, volume, cabinet, options);
};

const ChannelStrip = (options) => {
  return Object.assign({}, inputLevel, lowCut, volume, options);
};


test('GuitarAmp', assert => {
  const msg = 'should have distortion, volume, and cabinet';
  const level = 2;
  const cabinet = 'vintage';

  const actual = GuitarAmp({
    distortion: level,
    volume: level,
    cabinet
  });
  const expected = {
    distortion: level,
    volume: level,
    cabinet
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test('BassAmp', assert => {
  const msg = 'should have volume, lowCut, and cabinet';
  const level = 2;
  const cabinet = 'vintage';

  const actual = BassAmp({
    lowCut: level,
    volume: level,
    cabinet
  });
  const expected = {
    lowCut: level,
    volume: level,
    cabinet
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test('ChannelStrip', assert => {
  const msg = 'should have inputLevel, lowCut, and volume';
  const level = 2;

  const actual = ChannelStrip({
    inputLevel: level,
    lowCut: level,
    volume: level
  });
  const expected = {
    inputLevel: level,
    lowCut: level,
    volume: level
  };

  assert.deepEqual(actual, expected, msg);
  assert.end();
});
```

1. Two Foundation Kinds of Prototypal inheritance
- Prototypal inheritance = a prototype is a working object instance.
>A prototype = a working object instance (objects inherit directly from other objects)
><br>Achieved through two mechanisms:
><br>a) Prototype delegation
><br>Def.: If a property is not found on the object, the lookup is delegated to the delegate prototype, which may have a link to its own delegate prototype, and so on up the chain until you arrive at`Object.prototype`, which is the root delegate. This is the prototype that gets hooked up when you attach to a `Constructor.prototype` and instantiate with`new`. You can also use `Object.create()` for this purpose, and even mix this technique with concatenation in order to flatten multiple prototypes to a single delegate, or extend the object instance after creation.
><br>b) Concatenative inheritance
><br>Def.: The process of inheriting features directly from one object to another by copying the source objects properties. In JavaScript, source prototypes are commonly referred to as mixins. Since ES6, this feature has a convenience utility in JavaScript called `Object.assign()`. Prior to ES6, this was commonly done with Underscore/Lodash’s `.extend()`jQuery’s `$.extend()`, and so on… The composition example above uses concatenative inheritance.

- Simplified (mechanisms of inheritance):
> a) Sharing behavior, or delegate property lookup from the target object to some already existing object properties - "prototype delegation".
> <br>b)The ability to create new instances based on pre-defined behavior, share behavior by creating a non-referenced copy of the behaviour, then becoming instance safe.

# Composition over inheritance
<p>
    <a href="https://www.youtube.com/watch?v=wfMtDGfHWpA">Video</a>
</p>

# The new keyword
<p>
    <a href="https://www.youtube.com/watch?v=Y3zzCY62NYc">Video</a>
</p>

# The class keyword
<p>
    <a href="https://www.youtube.com/watch?v=Tllw4EPhLiQ&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=9">Video</a>
</p>