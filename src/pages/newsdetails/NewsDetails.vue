<template>
  <div
    v-if="isLoading"
    class="spinner-border default-color my-5"
    role="status"
    style="width: 100px; height: 100px"
  >
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="mt-5" style="min-height:70dvh">
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
        <h2>{{ News?.name }}</h2>
        <p>{{ News?.description || "N/A" }}</p>
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
const News = ref(null);

async function fetchProject(newsId) {
  try {
    isLoading.value = true;
    // Call your API endpoint to fetch the property details by ID
    const response = await axios.get(`${BASE_URL}/blogs/${newsId}`);
    // Store the fetched property data
    News.value = response.data;
    console.log("News Data :", News.value);
    isLoading.value = false;
  } catch (error) {
    console.error("Error fetching News:", error);
    isLoading.value = false;
  }
}
// Watch for changes in the route parameters (property ID)
watch(
  () => route.params.id,
  async (newValue, oldValue) => {
    if (newValue !== oldValue) {
      await fetchProject(newValue);
    }
  }
);
// Fetch recommended properties when the component is mounted
onMounted(async () => {
  const newsId = route.params.id;
  await fetchProject(newsId);
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
  width: 30rem;
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
  width: 70%;
  height: 422px;
}
video {
  width: 100%;
  height: 100%;
}
</style>
