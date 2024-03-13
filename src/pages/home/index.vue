<template>
  <nav-bar></nav-bar>
  <div class="container">
    <WhyChoose></WhyChoose>
    <FeaturedProperty></FeaturedProperty>
    <DiscoverProjects></DiscoverProjects>
    <ProfessionalServices></ProfessionalServices>
    <TopNews></TopNews>
  </div>

  <footer-page></footer-page>
</template>
<script setup>
import WhyChoose from "./WhyChoose.vue";
import FeaturedProperty from "./FeaturedProperty.vue";
import DiscoverProjects from "./DiscoverProjects.vue";
import ProfessionalServices from "./ProfessionalServices.vue";
import TopNews from "./TopNews.vue";
</script>

<style scoped></style>
