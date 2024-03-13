<template>
  <div class="text-center">
    <div class="section_title mb-5">
      <span class="title-one">DISCOVER</span>
      <h2 class="title-two">FEATURED PROPERTIES</h2>
    </div>
    <div
      v-if="isLoading"
      class="spinner-border default-color my-5"
      role="status"
      style="width: 100px; height: 100px"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="all-properties d-flex flex-wrap" style="gap: 26px">
      <router-link
        v-for="property in properties.properties.slice(0, 8)"
        :key="property._id"
        :to="'/property-detail/' + property._id"
        class="property-link"
      >
        <property-card :id="property._id" class="property">
          <template #property-img>
            <!-- <img :src="property.imgUrl" class="card-img-top" alt="..." /> -->
          </template>
          <template #property-added>
            {{ formatCreatedAt(property?.createdAt) }}
          </template>
          <template #property-name>
            {{ property.name }}
          </template>
          <template #property-location>
            {{ property.property_details?.address }}
          </template>
          <template #property-price>
            ${{ property.property_details?.price || "N/A" }}
          </template>
        </property-card>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import moment from "moment";
import { onMounted, ref } from "vue";
import { usePropertiesStore } from "@/stores/property/properties";
const propertiesStore = usePropertiesStore();
// loader
const isLoading = ref(true);

// GETTING PROPERTIES FROM PINIA STORE
const properties = ref([]);
onMounted(async () => {
  await propertiesStore.getAllProperties();
  isLoading.value = false;
  properties.value = propertiesStore.properties;
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
  .all-properties {
    margin-inline: auto;
  }
}
@media (max-width: 1200px) {
  .all-properties {
    justify-content: center;
  }
}
</style>
