'use strict';
var path = require('path');
var SweetJSPreprocessor = require('./lib/sweetjs-preprocessor');

function SweetJSAddon(project) {
  this._project = project;
  this.name     = 'Ember CLI SweetJS Addon';
}

/*SweetJSAddon.prototype.blueprintsPath = function() {
  return path.join(__dirname, 'blueprints');
};*/

SweetJSAddon.prototype.included = function(app) {
  this.app = app;

  var plugin = new SweetJSPreprocessor(this.app.options.sweetJSOptions);

  this.app.registry.add('js', plugin);
};

// This is just here because it was required in ember-cli v0.0.37.
// To be removed when compatibility breaks.
SweetJSAddon.prototype.treeFor = function() {};

module.exports = SweetJSAddon;
