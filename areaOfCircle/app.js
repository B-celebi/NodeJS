const inputArgs = process.argv.slice(2, 3);
inputArgs[0] = Number(inputArgs[0]);

const parameterToUse = inputArgs[0];
const pi = 3.14;

function findAreaOfCircle(r) {
  return pi * Math.pow(r, 2);
}
console.log("Alan: ", findAreaOfCircle(parameterToUse));
// Enter the arguments in the REPL.
