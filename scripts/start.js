const exec = require('child_process').exec;

const config = require('../replacer.config.js');
exec(`node read ${config.originFile}`)
console.log('replace ok!!')
