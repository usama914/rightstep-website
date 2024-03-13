import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const useDiscoverProjectsStore = defineStore({
    id: 'discoverProjects',
    state: () => ({
        discoverProjects: null
    }),
    actions: {
        async getDiscoverProjects() {
            try {
                const response = await axios.get(`${BASE_URL}/projects/bycity`)
                this.discoverProjects = response.data
                console.log("getDiscoverProjects store :", this.discoverProjects)
            } catch (e) {
                console.error(e)
            }
        }
    }
})

