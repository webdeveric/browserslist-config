#! /usr/bin/env node
'use strict';

const browserslist = require('browserslist');

function printConfig(header, config ) {
  console.group( header );

  if ( typeof config === 'string' || Array.isArray( config ) ) {
    browserslist( config ).forEach( browser => console.log( browser ) );
  } else if ( typeof config === 'object' && config !== null ) {
    for ( const [ envName, data ] of Object.entries( config ) ) {
      printConfig( envName, data );
    }
  }

  console.groupEnd();
}

printConfig('Default config', require('../index.js') );
printConfig('Node config', require('../node.js') );
printConfig('Web Extensions config', require('../web-extensions.js') );
