interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

/* 1. 类型断言 */
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}
/* 2.  使用 in 语法 做类型保护 */
function trainAnimalAgain(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

/* 3. 使用 typeof 语法 做类型保护 */
function add(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return;
  }
  return a + b;
}

class NumObj {
  count: number = 0;
}

/* 4. 使用 instanceof 语法 做类型保护 */
function minus(a: NumObj, b: NumObj) {
  if (a instanceof NumObj && b instanceof NumObj) {
    return a.count + b.count;
  }
  return 0;
}
