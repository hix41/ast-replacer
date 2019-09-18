#!/usr/bin/env node
const fs = require('fs');
const config = require('./replacer.config.js');

const recast = require("recast");

let outputCode;

recast.run(function(ast, printSource) {
  recast.visit(ast, {
    visitExpressionStatement: function({ node }) {
      if (node.expression.right.value === config.origin) {
        node.expression.right.value = config.target;
      }
      return false;
    },
    visitVariableDeclaration: function({ node }) {
      if (node.declarations[0].init.value === config.origin) {
        node.declarations[0].init.value = config.target;
      }
      return false;
    }
  });

  outputCode = recast.print(ast).code;
  console.log('readdddddd')
  writeFile();
});

const writeFile = function() {
  console.log('writeeee')
  fs.writeFile(config.targetFile, outputCode, (err) => {
    console.error(err);
  })
}
