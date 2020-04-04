/* 泛型结合 keyof 的写法 */

export interface Person {
  name: string;
  age: number;
  gender: string;
}

class Teacher {
  constructor(private person: Person) {}
  /* 这个写法很 NB */
  getName<T extends keyof Person>(key: T): Person[T] {
    return this.person[key];
  }
}

const teacher = new Teacher({
  name: 'xiaoxiang',
  age: 100,
  gender: 'male'
});

console.log(teacher.getName('gender'));
console.log(teacher.getName('age'));
