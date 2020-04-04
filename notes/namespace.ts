namespace Home {
  class Header {
    constructor() {
      const el = document.createElement('div');
      el.innerHTML = 'header';
      document.body.appendChild(el);
    }
  }

  class Content {
    constructor() {
      const el = document.createElement('div');
      el.innerHTML = 'content';
      document.body.appendChild(el);
    }
  }

  class Footer {
    constructor() {
      const el = document.createElement('div');
      el.innerHTML = 'footer';
      document.body.appendChild(el);
    }
  }

  /* 必须导出 */
  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
