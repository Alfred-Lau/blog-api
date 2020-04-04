var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var el = document.createElement('div');
            el.innerHTML = 'header';
            document.body.appendChild(el);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var el = document.createElement('div');
            el.innerHTML = 'content';
            document.body.appendChild(el);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var el = document.createElement('div');
            el.innerHTML = 'footer';
            document.body.appendChild(el);
        }
        return Footer;
    }());
    /* 必须导出 */
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
