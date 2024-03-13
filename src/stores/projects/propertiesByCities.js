import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const useCitiesPropertyStore = defineStore({
    id: 'properties-by-cities',
    state: () => ({
        cityProperties: null
    }),
    actions: {
        async getAllCityProperties() {
            try {
                const response = await axios.get(`${BASE_URL}/properties/bycity`)
                this.cityProperties = response.data
                console.log("getAllCityProperties store :", this.cityProperties)
            } catch (e) {
                console.error(e)
            }
        }
    }
})

// NOT CONFIRM , EDIT THE FILE NAME AND IN THE DISCOVERPROJECTS SECTION.
// NOT CONFIRM , EDIT THE FILE NAME AND IN THE DISCOVERPROJECTS SECTION.
// NOT CONFIRM , EDIT THE FILE NAME AND IN THE DISCOVERPROJECTS SECTION.
// NOT CONFIRM , EDIT THE FILE NAME AND IN THE DISCOVERPROJECTS SECTION.
// NOT CONFIRM , EDIT THE FILE NAME AND IN THE DISCOVERPROJECTS SECTION.