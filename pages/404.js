import { PageTemplate } from "../lib/page.js";

class Page404 extends PageTemplate {

  mainHTML() {
    return `<section class="container hero">
    <section class="row">
        <div class="left">
            <h1>404</h1>
            <p>Page not found</p>
            <a href="/" class="btn">Go back home</a>
        </div>
    </section>
</section>`;
  }
}

export { Page404 };
