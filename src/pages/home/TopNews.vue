<template>
  <div class="news mt-5 mb-5 text-center">
    <div class="section_title mb-5">
      <span class="title-one">Know MORE</span>
      <h2 class="title-two">TOP NEWS</h2>
    </div>
    <div
      v-if="isLoading"
      class="spinner-border default-color my-5"
      role="status"
      style="width: 100px; height: 100px"
    >
      <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else class="news d-flex flex-wrap" style="gap: 26px">
      <router-link
        v-for="news in allNews.slice(0, 4)"
        :key="news._id"
        :to="'/news-detail/' + news._id"
        class="property-link"
      >
        <news-card>
          <template #news-img>
            <!-- <img :src="news.imgUrl" class="card-img-top" alt="..." /> -->
            <img
              src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
              class="card-img-top"
              alt="..."
            />
          </template>
          <template #news-added>
            {{ formatCreatedAt(news?.createdAt) }}
          </template>
          <template #news-description>
            {{ truncateDescription(news?.description) }}
          </template>
          <base-button>
            <template #btn> asd </template>
          </base-button>
        </news-card>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useNews } from "@/stores/news/blogs";
import moment from "moment";
const News = useNews();
// loader
const isLoading = ref(true);

// GETTING PROPERTIES FROM PINIA STORE
const allNews = ref([]);
onMounted(async () => {
  await News.getNews();
  isLoading.value = false;
  allNews.value = News.allNews;
});

// Method to truncate description to 150 words
const truncateDescription = (description) => {
  if (!description) return "";
  const words = description.split(" ");
  if (words.length > 20) {
    return words.slice(0, 20).join(" ") + "...";
  } else {
    return description;
  }
};

//Time
// Method to format createdAt using Moment.js
const formatCreatedAt = (createdAt) => {
  return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
};
</script>

<style scoped>
button {
  width: 150px;
}
img {
  height: 320px !important;
  object-fit: cover;
  border-radius: 0 !important;
}

@media (max-width: 1400px) {
  .news {
    margin-inline: auto;
  }
}
@media (max-width: 1200px) {
  .news {
    justify-content: center;
  }
}
</style>
