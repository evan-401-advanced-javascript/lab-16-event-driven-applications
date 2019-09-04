"use strict";

const events = require('./events');
const updateFile = require('./write-file.js');

events.on('uppercase', data => makeUppercase(data));

/**
 * Function turns the data file to a string and call the write function
 * @param data
 */
const makeUppercase = (data) => {
    let text = data.toString().toUpperCase();
    console.log(`You converted ${text} to uppercase.`)
    events.emit('write', text);
};


module.exports = makeUppercase;