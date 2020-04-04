interface Item {
  name: string;
}

class DataManager<T extends Item> {
  constructor(private data: T[]) {}

  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data = new DataManager([
  {
    name:
      '警世贤文之勤奋篇： 有田不耕仓禀虚，有书不读子孙愚。宝剑锋从磨砺出 梅花香自苦寒来 少壮不知勤学苦，老来方悔读书迟。'
  }
]);

// const func: <T>(param: T) => T = <T>() => {
//   return  T;
// };
