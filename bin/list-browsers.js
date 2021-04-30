#! /usr/bin/env node
'use strict';

const path = require('path');
const browserslist = require('browserslist');

const logItem = item => console.log( item );

const getBrowsers = ( config, env ) => browserslist(
  `extends ${config}`,
  {
    dangerousExtend: true,
    env,
  },
);

const environments = [ 'development', 'production' ];

const configs = new Map([
  [ 'Default', path.resolve( __dirname, '../index.js' ) ],
  [ 'Node', path.resolve( __dirname, '../node.js' ) ],
  [ 'Web Extensions', path.resolve( __dirname, '../web-extensions.js') ],
]);

configs.forEach( (config, name) => {
  console.group( name );

  environments.forEach( env => {
    console.group( env );
    getBrowsers( config, env ).forEach( logItem );
    console.groupEnd();
  });

  console.groupEnd();
});
