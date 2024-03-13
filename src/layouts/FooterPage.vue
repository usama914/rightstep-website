<template>
  <footer>
    <div class="footer-content flex-wrap container">
      <div class="portion contact-us">
        <h3 class="mb-5">Contact Us</h3>
        <ul>
          <li>
            <div>
              <i class="fa-solid fa-location-dot me-2"></i>Lorem ipsum dolor
            </div>
          </li>
          <li>
            <div><i class="fa-solid fa-phone me-2"></i>+92 123456789</div>
          </li>
          <li>
            <div><i class="fa-solid fa-envelope me-2"></i>abc@gmail.com</div>
          </li>
        </ul>
      </div>
      <div class="portion quick-links">
        <h3 class="mb-5">Quick Links</h3>
        <ul>
          <li>
            <router-link to="/find-property">Find A Property</router-link>
          </li>
          <li>
            <router-link to="/find-project">Projects</router-link>
          </li>
          <li>
            <router-link to="/services">Services</router-link>
          </li>
          <li>
            <router-link to="/contact-us"> Contact Us</router-link>
          </li>
          <li>
            <router-link to="/why-us">Why Us</router-link>
          </li>
        </ul>
      </div>
      <div class="portion follow-us">
        <h3 class="mb-5">Follow Us</h3>
        <ul class="d-flex gap-4">
          <li><i class="fa-brands fa-facebook fa-lg"></i></li>
          <li><i class="fa-brands fa-google fa-lg"></i></li>
          <li><i class="fa-brands fa-twitter fa-lg"></i></li>
          <li><i class="fa-brands fa-instagram fa-lg"></i></li>
        </ul>
      </div>
    </div>
    <div class="container">
      <p>© 2021 All rights reserved. Created by Lorem Ipsum</p>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: black;
  color: white;
  padding-top: 1rem;
  padding-bottom: 10px;
}
.footer-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap !important;
  gap: 0rem;
}
.portion {
  width: calc(100% / 3);
  /* border: 1px solid white; */
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
  margin-bottom: 20px;
  cursor: pointer;
}
a {
  font-size: 15px;
  line-height: 24px;
  font-weight: 300;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  /* border: 1px solid slateblue; */
}
a:hover,
i:hover {
  color: rgb(107, 230, 44);
}

@media (max-width: 800px) {
  .footer-content {
    justify-content: center;
  }
  .portion {
    width: calc(100% / 2);
    padding: 10px;
  }
  .portion:nth-child(3) {
    text-align: center;
  }
  .portion:nth-child(3) ul {
    justify-content: center;
  }
}
</style>
