import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const useNews = defineStore({
    id: 'News',
    state: () => ({
        allNews: null
    }),
    actions: {
        async getNews() {
            try {
                const response = await axios.get(`${BASE_URL}/blogs`)
                this.allNews = response.data
                console.log("blogs store :", this.allNews)
            } catch (e) {
                console.error(e)
            }
        }
    }
})

