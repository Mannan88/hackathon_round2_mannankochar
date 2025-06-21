class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="navbar" id="navbar">
        <div class="logo">InLighn Tech</div>

        <ul class="nav-links">
          <li><a href="/index.html">Home</a></li>
          <li><a href="/about-us.html">About Us</a></li>
          <li><a href="/programs.html">Programs</a></li>
          <li><a href="/verify.html">Verify Certificate</a></li>
          <li><a href="/special.html">What's Special</a></li>
          <li><a href="/contact-us.html">Contact Us</a></li>
        </ul>

        <div class="login-btn">
          <a href="/login.html">Login to Portal</a>
        </div>
      </header>
    `;
  }
}

customElements.define('custom-navbar', Navbar);