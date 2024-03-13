<template>
  <div
    v-if="isLoading"
    class="spinner-border default-color my-5"
    role="status"
    style="width: 100px; height: 100px"
  >
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="mt-5">
    <div class="gallery mb-3">
      <div class="video">
        <video autoplay muted loop>
          <source src="../../assets/sunrise.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="images">
        <img
          src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
          alt=""
        />
        <img
          src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
          alt=""
        />
        <img
          src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
          alt=""
        />
        <img
          src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="basic-info">
      <div class="general mb-3">
        <h2>{{ property?.name || "N/A" }}</h2>
        <p>{{ property?.property_details.address || "N/A" }}</p>
      </div>
      <div class="tags mb-3">
        <button
          type="button"
          class="btn btn-outline-secondary"
          disabled
          v-for="amenities in property?.propertyAmenties"
        >
          {{ amenities }}
        </button>
      </div>
      <div class="description mb-3">
        <h2>Description</h2>
        <p>
          {{ property?.description }}
        </p>
      </div>
      <div class="details mb-3">
        <h2>Details</h2>
        <ul>
          <li>
            <div class="sub-details">
              <h6>Address</h6>
              <p>{{ property?.property_details?.address || "N/A" }}</p>
            </div>
            <div class="sub-details">
              <h6>Area</h6>
              <p>{{ property?.property_details?.area || "N/A" }}</p>
            </div>
            <div class="sub-details">
              <h6>Bedrooms</h6>
              <p>{{ property?.property_details?.bedrooms || "N/A" }}</p>
            </div>
            <div class="sub-details">
              <h6>City</h6>
              <p>{{ property?.property_details?.city || "N/A" }}</p>
            </div>
            <div class="sub-details">
              <h6>Floor</h6>
              <p>{{ property?.property_details?.floor || "N/A" }}</p>
            </div>
            <div class="sub-details">
              <h6>Price</h6>
              <p>{{ property?.property_details?.price || "N/A" }}</p>
            </div>
            <div class="sub-details">
              <h6>Property Number</h6>
              <p>{{ property?.property_details?.propertyNumber || "N/A" }}</p>
            </div>
            <div class="sub-details">
              <h6>Property Title</h6>
              <p>{{ property?.property_details?.propertyTitle || "N/A" }}</p>
            </div>
            <div class="sub-details">
              <h6>Property Type</h6>
              <p>{{ property?.property_details?.propertyType || "N/A" }}</p>
            </div>
            <div class="sub-details">
              <h6>Washrooms</h6>
              <p>{{ property?.property_details?.washrooms || "N/A" }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="amenities mb-3">
        <button
          type="button"
          class="btn btn-outline-secondary me-3"
          disabled
          v-for="(amenities, index) in property?.propertyAmenties || 'N/A'"
          :key="index"
        >
          {{ amenities }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { BASE_URL } from "@/baseUrl";
import axios from "axios";
// getting id from route
const route = useRoute();
// Loader
const isLoading = ref(false);

// Property data
const property = ref(null);

async function fetchProperty(propertyId) {
  try {
    isLoading.value = true;
    // Call your API endpoint to fetch the property details by ID
    const response = await axios.get(`${BASE_URL}/property/${propertyId}`);
    // Store the fetched property data
    property.value = response.data;
    console.log("Property Data :", property.value);
    isLoading.value = false;
  } catch (error) {
    console.error("Error fetching property:", error);
    isLoading.value = false;
  }
}
// Watch for changes in the route parameters (property ID)
watch(
  () => route.params.id,
  async (newValue, oldValue) => {
    if (newValue !== oldValue) {
      await fetchProperty(newValue);
    }
  }
);
// Fetch recommended properties when the component is mounted
onMounted(async () => {
  const propertyId = route.params.id;
  await fetchProperty(propertyId);
});
</script>

<style scoped>
img {
  width: calc(100% / 2.1);
}
ul {
  padding: 0 !important;
}

li {
  list-style: none;
}
.sub-details {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  max-width: 30rem;
  width: 100%;
  padding: 10px 0;
}
.sub-details:last-child {
  border-bottom: none;
}

.gallery {
  display: flex;
  /* border: 1px solid; */
  gap: 10px;
}

.images {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 50%;
  row-gap: 15px;
}
.video {
  width: 75%;
  height: 397px;
}
video {
  width: 100%;
  height: 100%;
}

@media (max-width: 1400px) {
  .gallery {
    flex-direction: column;
    align-items: center;
  }
  .video {
    height: 100% !important;
  }
  .video,
  .images {
    width: 100%;
  }
}
@media (max-width: 800px) {
  .video {
    min-height: 200px !important;
  }
}
</style>
