'use strict';

module.exports = {
  development: [ 'last 1 version' ],
  production: [
    'last 3 versions',
    'ie >= 11',
    'not ie < 11',
    'not ie_mob <= 11',
  ],
};
