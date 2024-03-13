<template>
  <div class="text-start mb-5">
    <div class="section_title text-start mt-5 mb-5">
      <h2 class="title-two" style="text-align: start">PROPERTIES IN ISLAMABAD</h2>
      <span class="title-one">{{ properties.count }} PROPERTIES</span>
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
    <div v-else class="all-properties d-flex flex-wrap" style="gap: 26px">
      <router-link
        v-for="property in properties.properties"
        :key="property._id"
        :to="'/property-detail/' + property._id"
        class="property-link"
      >
        <property-card :id="property._id">
          <template #property-img>
            <!-- <img :src="property.imgUrl" class="card-img-top" alt="..." /> -->
          </template>
          <template #property-added>
            {{ formatCreatedAt(property?.createdAt) }}
          </template>
          <template #property-name>
            {{ property?.name }}
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
import { ref, onMounted } from "vue";
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
  .section_title,
  .title-two {
    text-align: center !important;
  }
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
