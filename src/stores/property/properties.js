import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const usePropertiesStore = defineStore({
    id: 'properties',
    state: () => ({
        properties: null
    }),
    actions: {
        async getAllProperties() {
            try {
                const response = await axios.get(`${BASE_URL}/properties`)
                this.properties = response.data
                console.log("getAllProperties store :", this.properties)
            } catch (e) {
                console.error(e)
            }
        }
    }
})

