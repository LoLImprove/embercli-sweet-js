var sweetJS = require('broccoli-sweetjs');
var sweetjs = require('sweet.js');
var wrench = require("wrench");
var path = require('path');
var fs = require('fs');

function SweetJSPreprocessor(options) {
  this.name = 'ember-cli-sweetjs';
  this.ext = 'js';
  this.options = options || {};
}

SweetJSPreprocessor.prototype.toTree = function(tree, inputPath, outputPath) {

  var macrosPath = this.options.macrosPath,
      files      = wrench.readdirSyncRecursive(macrosPath),
      macros     = files.filter(function(f){
        return path.extname(f) == '.js';
      }).map(function(f){
        var file = fs.readFileSync(macrosPath + '/' + f, "utf8");
        return sweetjs.loadModule(file);
      });;

  var options = {
    modules: macros,
    srcDir: inputPath,
    destDir: outputPath
  };

  return sweetJS(tree, options);
};

module.exports = SweetJSPreprocessor;
