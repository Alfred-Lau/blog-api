/* 泛型 generic 泛指的类型: 1个泛型，多个泛型 */
function join<T>(first: T, second: T) {
  return `${first}${second}`;
}

join<string>('1', '1');
// join<number>('1', '1');  // err
