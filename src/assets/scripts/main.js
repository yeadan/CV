/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  var element = document.getElementById("email");
  if (element)
    element.style.fontFamily = "cursive";
  else console.log("ERROR");
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();
