class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header class="navbar" id="navbar">
  <div class="logo">InLighn Tech</div>

  <nav class="nav-wrapper">
  <ul class="nav-links">
          <li><a href="/your-repo-name/index.html">Home</a></li>
          <li><a href="/your-repo-name/about-us.html">About Us</a></li>
          <li><a href="/your-repo-name/programs.html">Programs</a></li>
          <li><a href="/your-repo-name/verify.html">Verify Certificate</a></li>
          <li><a href="/your-repo-name/special.html">What's Special</a></li>
          <li><a href="/your-repo-name/contact-us.html">Contact Us</a></li>
        </ul>
    <button class="hamburger" id="hamburger">&#9776;</button>
   
  </nav>

  <div class="nav-actions">
    <button id="dark-toggle">🌙</button>
    <div class="login-btn">
      <a href="/login.html">Login to Portal</a>
    </div>
  </div>
</header>

    `;
  }
}
 

customElements.define('custom-navbar', Navbar);

class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-section brand">
      <img src="/assets/logo-footer.png" alt="InLighn Tech Logo" class="footer-logo" />
      <p>
        At <strong>INLIGHN TECH</strong>, we believe that the future of education lies in bridging the gap between academic learning and industry needs.
      </p>
    </div>

    <div class="footer-section links">
      <h4>Menu</h4>
      <ul>
        <li><a href="/your-repo-name/index.html">Home</a></li>
          <li><a href="/your-repo-name/about-us.html">About Us</a></li>
          <li><a href="/your-repo-name/programs.html">Programs</a></li>
          <li><a href="/your-repo-name/verify.html">Verify Certificate</a></li>
          <li><a href="/your-repo-name/special.html">What's Special</a></li>
          <li><a href="/your-repo-name/contact-us.html">Contact Us</a></li>
       </ul>
    </div>

    <div class="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Disclaimer</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </div>

    <div class="footer-section contact">
      <h4>Follow Us</h4>
      <div class="social-icons">
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
      </div>
      <p><i class="fa-solid fa-location-dot"></i> VO-301, WeWork Prestige Central, 36 Infantry Rd, Bengaluru, KA 560001</p>
      <p><i class="fa-solid fa-phone"></i> +91 9368842663</p>
      <p><i class="fa-solid fa-envelope"></i> info@inlighntech.com</p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>Copyright 2025 <span class="highlight">INLIGHN TECH</span> | All Rights Reserved | Design By <span class="design">Gdscreatives</span></p>
  </div>
</footer>
`}}

customElements.define('custom-footer', footer);


  window.addEventListener("pageshow", () => {
    document.getElementById("page-transition").classList.remove("active");
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a[href]").forEach(link => {
      const href = link.getAttribute("href");

      if (
        href &&
        !href.startsWith("#") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:") &&
        !link.hasAttribute("target")
      ) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const transition = document.getElementById("page-transition");
          transition.classList.add("active");
          setTimeout(() => {
            window.location.href = href;
          }, 500);
        });
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const toggleBtn = document.getElementById("dark-toggle");
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

});
document.addEventListener("DOMContentLoaded", () => {
  // Wait a tick to ensure custom elements render
  setTimeout(() => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  }, 0);
});
