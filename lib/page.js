class PageTemplate {
  constructor() {
      this.title = 'Server';
      this.pageCSSfileName = 'home';
      this.pageJSfileName = '';
      this.isHomePage = false;
      this.yearStarted = 2020;
  }

  headHTML() {
    return `<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=10">
        <title>${this.title}</title>
        <link rel="stylesheet" href="/css/pages/${this.pageCSSfileName}.css">
        </head>`;
  }

  logoHTML() {
      if (this.isHomePage) {
          return `<img src="/img/logo.png" alt="Logo" class="logo">`;
        } else {
            return `<a href="/">
            <img src="/img/logo.png" alt="Logo" class="logo">
        </a>`;
        }
  }

  headerHTML() {
    return `<header class="container header">
        <div class="row">
            ${this.logoHTML()}
            <nav>
                <a href="/blog/">Blog</a>
                <a href="/register/">Register</a>
                <a href="/login/">Log in</a>
            </nav>
        </div>
    </header>`;
  }

  footerHTML() {
      const date = new Date();
      const currentYear = date.getFullYear();

      let year = this.yearStarted;
      if(this.yearStarted !== currentYear) {
          year += `-${currentYear}`
      }

    return `<footer class="container">
        <div class="row">
            &copy; Copyrights ${year} Oxo All rights reserved.
        </div>
    </footer>`;
  }

  scriptHTML() {
      if(this.pageJSfileName) {
          return `<script src="/js/pages/${this.pageJSfileName}.js" type="module" defer></script>`
      }
      return '';
  }
  async mainHTML() {
    return `PAGE CONTENT`;
  }

  async render() {
    return `<!DOCTYPE html>
        <html lang="en">
        ${this.headHTML()}
        <body>
        ${this.headerHTML()}
            <main>
                ${await this.mainHTML()}
            </main>
            ${this.footerHTML()}
            ${this.scriptHTML()}
        </body>
        </html>`;
  }
}

export { PageTemplate };
