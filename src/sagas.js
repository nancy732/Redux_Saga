// Generator functions
function* helloSagas() {
  yield "hello";
  yield "saga";
  return "hi";
}

function* newGenerator() {
  yield "new ";
  const final = yield "pass the value";
  return final;
}

const helloSagasResult = helloSagas();
const newGeneratorResult = newGenerator();

console.log("helloSagasResult", helloSagasResult.next());
console.log("helloSagasResult", helloSagasResult.next());
console.log("helloSagasResult", helloSagasResult.next());
console.log("result", newGeneratorResult.next());
console.log("result", newGeneratorResult.next());
console.log("result", newGeneratorResult.next("new value"));
console.log("result", newGeneratorResult.next());
