# SweetJS support for ember-cli
Adds precompilation of SweetJS files and all the basic generation
types to the `ember generate` command.


# DISCLAIMER /!\ Not working /!\
ember-cli-sweet.js is not currently working. The reason is that sweet.js does not support `import` statements from ES6 module system.
An issue has been opened https://github.com/mozilla/sweet.js/issues/426

### Includes
- Generating files in SweetJS with `ember generate`
- Preprocessing SweetJS-files in your app

### Install
```
npm install ember-cli-sweetjs --save-dev
```

**NB**: This addon requires ember-cli version `0.1.0` and up. It might work on
earlier versions, but I wouldn't know.

### How to use

#### Blueprints
Run `ember help generate` to get a list of available blueprints.
Use them by running `ember g <blueprint> <args>`, for instance `ember g
controller pants --type=array`

ember-cli-sweetjs comes with pod-support for the same blueprints as ember-cli
does. Check out [the ember-cli docs for pods](http://www.ember-cli.com/#pods)
for instructions on how to use it.

#### Precompiling
This will happen automatically - no work necessary.

```javascript
new EmberApp({
  sweetJSOptions: {
    macrosPath: './macros'
  }
})
```

#### Authors

Gabriel Dehan
[Kimroen's ember-cli-coffeescript](https://github.com/kimroen/ember-cli-coffeescript)