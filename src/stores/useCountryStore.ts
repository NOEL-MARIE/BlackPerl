import type { CountryResponse } from '@/services/country/country-type'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Store pour le pays courant
export const useCountryStore = defineStore('country', () => {
  const currentCountry = ref<CountryResponse>()

  const setCurrentCountry = (country: CountryResponse) => {
    currentCountry.value = country
  }

  return {
    currentCountry,
    setCurrentCountry,
  }
})
