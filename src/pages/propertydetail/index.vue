<template>
  <nav-bar></nav-bar>
  <div class="container">
    <PropertyDetails></PropertyDetails>
    <RecommendedProperties></RecommendedProperties>
  </div>
  <footer-page></footer-page>
</template>
<script setup>
import PropertyDetails from "./PropertyDetails.vue";
import RecommendedProperties from "./RecommendedProperties.vue";
</script>
