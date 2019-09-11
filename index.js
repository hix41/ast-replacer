let esprima = require('esprima');
let code = 'function ast(){}';
let ast = esprima.parse(code);
console.log(ast);