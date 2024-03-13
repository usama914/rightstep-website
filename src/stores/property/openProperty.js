import { defineStore } from 'pinia'
import { BASE_URL } from '@/baseUrl'
import axios from 'axios'

export const useOpenProperty = defineStore({
    id: 'openproperty',
    state: () => ({
        propertyDetail: null
    }),
    actions: {
        async getPropertyDetail() {
            try {
                const response = await axios.get(`${BASE_URL}/properties/`)
                this.properties = response.data
                console.log("getAllProperties store :", this.properties)
            } catch (e) {
                console.error(e)
            }
        }
    }
})

