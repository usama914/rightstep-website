<template>
  <div class="">
    <nav class="container navbar navbar-expand-lg" :class="{ 'sticky-nav': isSticky }">
      <div class="container-fluid">
        <router-link to="/">
          <img src="../assets/logo.png" style="width: 70%" alt="" />
        </router-link>
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
            <li class="">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/find-property"
                >Find A Property</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/find-project">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/why-us">Why us?</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="" v-if="$route.name === 'home'">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <video autoplay muted loop alt="..." style="width: 100%">
              <source src="../assets/sunrise.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="carousel-item">
            <img
              src="https://koliba.com.au/wp-content/uploads/2023/09/a3-1-900x604.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div v-else class="background" style="width: 100%">
      <div class="bg-img">
        <img
          src="https://takeyoursuccess.com/wp-content/uploads/2019/08/commerical-property-enhancements.jpg"
          class="d-block w-100"
          alt="..."
          style="max-height: 70dvh"
        />
      </div>

      <div class="bg-title">
        <h2 style="font-size: 5rem">{{ $route.name }}</h2>
      </div>
    </div>
  </div>
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
  position: fixed;
  z-index: 999;
  width: 100%; /* Ensure full width */
  left: 50%; /* Move the nav to the horizontal center */
  transform: translateX(-50%); /* Adjust to center it precisely */
}

a {
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  /* border: 1px solid slateblue; */
}
a:hover {
  color: rgb(107, 230, 44);
}

.navbar {
  transition: background-color 0.3s, color 0.3s;
}

.sticky-nav {
  background-color: white;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
}

.sticky-nav a {
  color: black;
}

.router-link-active {
  color: rgb(107, 230, 44) !important;
  font-weight: 600;
}

.background {
  display: relative;
}
.bg-title {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: larger;
}

.navbar-toggler {
  background-color: white !important;
}
.navbar-collapse {
  margin-left: 10px !important;
  margin-top: 15px !important;
}

.carousel-item {
  max-height: 100dvh;
}

@media (max-width: 800px) {
  .bg-title {
    top: 25%;
  }
}
</style>
