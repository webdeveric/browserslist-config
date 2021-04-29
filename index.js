'use strict';

module.exports = {
  development: [
    'last 1 versions',
    'not dead',
    'not op_mini all',
    'not ie <= 11',
    'not ie_mob <= 11',
  ],
  production: [
    'defaults',
    'not op_mini all',
    'not ie <= 11',
    'not ie_mob <= 11',
  ],
};
