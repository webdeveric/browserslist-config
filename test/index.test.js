'use strict';

const { assert } = require('chai');
const browserslist = require('browserslist');
const { name } = require('../package.json');
const config = require('../index.js');

describe(name, function() {
  it('config is an object', function() {
    assert.isObject(config, 'Config is not an object');
  });

  it('config is not empty', function() {
    assert.isNotEmpty(config, 'Config is empty');
  });

  it('works with browserslist', function() {
    const browsers = browserslist( config.production );

    assert.isArray(browsers, 'browsers is not an array');
    assert.isNotEmpty(browsers, 'browsers is empty');
    assert.notInclude(browsers, 'ie 9', 'browsers contains ie 9');
  });
});
