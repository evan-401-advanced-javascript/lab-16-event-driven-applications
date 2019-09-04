'use strict';

const fs = require('fs');
const events = require('./modular-events/events');
const processFile = require('./modular-events/read-file.js');

/**
 * Function uses emitter to pass the file name to the read function
 * @param file
 */
const alterFile = (file) => {
 //reading file
  console.log('alter file:', file);
  events.emit('read',file);
};

let file = process.argv.slice(2).shift();
alterFile(file);
