import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const useProjectsStore = defineStore({
    id: 'projects',
    state: () => ({
        projects: null
    }),
    actions: {
        async getAllProjects() {
            try {
                const response = await axios.get(`${BASE_URL}/projects`)
                this.projects = response.data
                console.log("getAllProjects store :", this.projects)
            } catch (e) {
                console.error(e)
            }
        }
    }
})

