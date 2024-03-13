<template>
  <div class="text-start mb-5">
    <div class="section_title text-start mt-5 mb-5">
      <h2 class="title-two" style="text-align: start">
        PROJECTS IN ISLAMABAD
      </h2>
      <span class="title-one">{{projects.count}} PROPERTIES</span>
    </div>
    <div v-if="isLoading" class="loader">
      <div
        class="spinner-border default-color my-5"
        role="status"
        style="width: 100px; height: 100px"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="all-projects d-flex flex-wrap" style="gap: 26px">
      <router-link
        v-for="project in projects.projects"
        :key="project._id"
        :to="'/project-detail/' + project._id"
        class="property-link"
      >
        <property-card>
          <template #property-img>
            <!-- <img :src="property.imgUrl" class="card-img-top" alt="..." /> -->
          </template>
          <template #property-added>
            {{ formatCreatedAt(project.createdAt) }}
          </template>
          <template #property-name>
            {{ project.name }}
          </template>
          <template #property-location>
            {{ project.project_details?.address }}
          </template>
          <template #property-price>
            ${{ project.project_details?.price || "N/A" }}
          </template>
        </property-card>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import moment from "moment";
import { onMounted, ref } from "vue";
import { useProjectsStore } from "@/stores/projects/projects";
const propertiesStore = useProjectsStore();
// loader
const isLoading = ref(true);

// GETTING PROPERTIES FROM PINIA STORE
const projects = ref([]);
onMounted(async () => {
  // Calling getAllProperties() action
  await propertiesStore.getAllProjects();
  // then, assigning the properties to the ref
  isLoading.value = false;
  projects.value = propertiesStore.projects;
});
//Time
// Method to format createdAt using Moment.js
const formatCreatedAt = (createdAt) => {
  return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
};
</script>

<style scoped>
img {
  height: 320px;
  object-fit: cover;
  border-radius: 0 !important;
}

@media (max-width: 1400px) {
  .section_title,
  .title-two {
    text-align: center !important;
  }
  .all-projects {
    margin-inline: auto;
  }
}
@media (max-width: 1200px) {
  .all-projects {
    justify-content: center;
  }
}
</style>
