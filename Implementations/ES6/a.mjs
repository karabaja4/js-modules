// a.mjs

function print1() {
  console.log('Hello from print1');
}

function print2() {
  console.log('Hello from print2');
}

function print3() {
  console.log('Hello from print3');
}

// only one per file
export default print1;

export { print1, print2, print3 };