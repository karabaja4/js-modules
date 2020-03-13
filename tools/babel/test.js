import { A } from './lib/a';

class Test {
  constructor(name) {
    console.log(`I am a Test class... ${name}`);
    const a = new A();
    a.print();
  }
}

var test = new Test('1234');