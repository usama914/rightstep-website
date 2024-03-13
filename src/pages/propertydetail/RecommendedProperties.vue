<template>
  <div class="text-center mb-5">
    <div class="section_title mt-5">
      <h2 class="title-two text-start">Recommended</h2>
    </div>
    <div
      v-if="isLoading"
      class="spinner-border default-color my-5"
      role="status"
      style="width: 100px; height: 100px"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="all-properties d-flex flex-wrap" style="gap: 20px">
      <router-link
        v-for="property in properties"
        :key="property._id"
        :to="'/property-detail/' + property._id"
        class="property-link"
      >
        <property-card :id="property._id">
          <template #property-img>
            <!-- <img :src="property.imgUrl" class="card-img-top" alt="..." /> -->
          </template>
          <template #property-added>
            {{ property?.createdAt || 'N/A'}}
          </template>
          <template #property-name>
            {{ property?.name || 'N/A'}}
          </template>
          <template #property-location>
            {{ property?.property_details?.address || 'N/A'}}
          </template>
          <template #property-price> ${{ property?.property_details?.price || 'N/A'}} </template>
        </property-card>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { usePropertiesStore } from "@/stores/property/properties";
const propertiesStore = usePropertiesStore();
// loader
const isLoading = ref(true);

// GETTING PROPERTIES FROM PINIA STORE
const properties = ref([]);
onMounted(async () => {
  // Calling getAllProperties() action
  await propertiesStore.getAllProperties();
  // then, assigning the properties to the ref
  isLoading.value = false;
  properties.value = propertiesStore.properties;
});
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
  .all-properties{
    margin-inline: auto;
  }
}
@media (max-width: 1200px) {
  .all-properties{
    justify-content: center;
  }
}
</style>
