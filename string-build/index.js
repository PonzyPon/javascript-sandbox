// This is for comparing the way to concat strings.
// 
// % node -v                                                                                                                                   (git)-[master]
// v12.16.1
// % node index.js                                                                                                                             (git)-[master]
// Use += operator
// Time : 1422.176440000534
// Use array
// Time : 580.4845250248909

const { performance } = require("perf_hooks");

console.log("Use += operator");

const operatorStart = performance.now();
var str = "";
for (var i = 0; i < 10000000; i++) {
  str += "a";
}
console.log("Time : " + (performance.now() - operatorStart));

console.log("Use array");

const arrayStart = performance.now();
var strs = [];
for (var i = 0; i < 10000000; i++) {
  strs.push("a");
}
const joined = strs.join("");
console.log("Time : " + (performance.now() - arrayStart));
