"use strict";

const fs = require('fs');
const events = require('./events');
let file = process.argv.slice(2).shift();
events.on('write', text => updateFile(text));

/**
 * Function writes changes made back to the file.
 * @param text
 * @returns {Promise<void>}
 */
const updateFile = async (text) => {
  await fs.writeFile( file, Buffer.from(text), (err, data) => {
    if (err) { throw err; }
    console.log(`${file} saved`);
  });
};

module.exports = updateFile;