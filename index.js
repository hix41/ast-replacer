const recast = require("recast");


// Parse the code using an interface similar to require("esprima").parse.
const ast = recast.parse(code);

const target = ast.program.body[0];
if (target.type === 'ExpressionStatement' && target.expression.name === 'THIS_IS_TARGET') {
  console.log('replace')
}