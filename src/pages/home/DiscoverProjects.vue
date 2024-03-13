<template>
  <div class="text-center mt-5">
    <div class="section_title mb-5">
      <span class="title-one">DISCOVER</span>
      <h2 class="title-two">PROJECTS</h2>
    </div>
    <div
      v-if="isLoading"
      class="spinner-border default-color my-5"
      role="status"
      style="width: 100px; height: 100px"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="projects">
      <project-card v-for="project in projects.slice(0, 8)" ::key="project.id">
        <template #project-img>
          <img
            src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
            class="card-img-top"
            alt="..."
          />
        </template>
        <template #project-text>{{ project?.city }}</template>
        <template #project-number>{{ project?.count }} projects</template>
      </project-card>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import moment from "moment";
import { useDiscoverProjectsStore } from "@/stores/projects/discoverprojects";
const discoverProjects = useDiscoverProjectsStore();
// loader
const isLoading = ref(true);

// GETTING PROPERTIES FROM PINIA STORE
const projects = ref([]);
onMounted(async () => {
  // Calling getAllProperties() action
  await discoverProjects.getDiscoverProjects();
  // then, assigning the properties to the ref
  isLoading.value = false;
  projects.value = discoverProjects.discoverProjects;
});
//Time
// Method to format createdAt using Moment.js
const formatCreatedAt = (createdAt) => {
  return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
};
</script>

<style scoped>
.projects {
  display: flex;
  gap: 26px;
}
img {
  height: 320px;
  object-fit: cover;
  border-radius: 0 !important;
}

@media (max-width: 1400px) {
  .projects {
    margin-inline: auto;
  }
}
@media (max-width: 1200px) {
  .projects {
    justify-content: center;
  }
}
</style>
