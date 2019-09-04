"use strict";

const fs = require('fs');
const events = require('./events');
const makeUppercase = require('./uppercase');

events.on('read', file => processFile(file));

/**
 *  Function uses fs to read file and then uses emitter to call uppercase.
 * @param file
 * @returns {Promise<void>}
 */
const processFile = async (file) => {
  console.log('reading the file', file);
  await fs.readFile (file, (err, data) => {
    if (err) { throw err; }
    events.emit('uppercase', data);
    });
  //return text;
};

module.exports = processFile;
