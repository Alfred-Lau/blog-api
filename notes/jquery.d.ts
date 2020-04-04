interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}

/* 1. 定义全局变量 */
// declare var $: (params: () => void) => void;

/* 2. 定义全局函数 */

// declare function $(params: () => void): void;

// /* 3. 重载函数 */
// declare function $(selector: string): JqueryInstance;

/* 4. 声明一个对象,对类，嵌套命名空间 */

// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }

/*  5. 函数重载的简写 */

interface JQuery {
  (readyFunc: () => void): void;
  (selector: string): JqueryInstance;
}

declare var $: JQuery;

/* 6. es6 模块化 ：当你通过 npm 模块进行使用的时候*/

// declare module 'jquery' {
//   interface JqueryInstance {
//     html: (html: string) => JqueryInstance;
//   }

//   function $(params: () => void): void;
//   function $(selector: string): JqueryInstance;

//   namespace $ {
//     namespace fn {
//       class init {}
//     }
//   }

//   export = $;
// }
