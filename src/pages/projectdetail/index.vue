<template>
  <nav-bar></nav-bar>
  <div class="container">
    <ProjectDetails></ProjectDetails>
    <RecommendedProjects></RecommendedProjects>
  </div>
  <footer-page></footer-page>
</template>
<script setup>
import RecommendedProjects from "./RecommendedProjects.vue";
import ProjectDetails from "./ProjectDetails.vue";
</script>
