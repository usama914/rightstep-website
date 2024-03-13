<template>
  <nav class="container navbar navbar-expand-lg" :class="{ 'sticky-nav': isSticky }">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">NavbarTwo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Find a Property</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Why us?</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
nav {
  background: transparent;
  position: absolute;
  z-index: 999;
  right: 300px;
  width: 100%; /* Ensure full width */
}

a {
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  color: white;
  text-transform: uppercase;
}

.navbar {
  transition: background-color 0.3s, color 0.3s;
}

.sticky-nav {
  background-color: white;
  top: 0; /* Keep the navbar at the top of the page */
  width: 100%; /* Ensure full width */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
  position: fixed;
}

.sticky-nav a {
  color: black;
}
</style>
