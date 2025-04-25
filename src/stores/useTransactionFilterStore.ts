import type { TransactionFiltersPayload, UserFiltersPayload } from '@/services/global.type'
import { defineStore, storeToRefs } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCountryStore } from './useCountryStore'

const initialFilters: TransactionFiltersPayload = {
  q: undefined,
  page: 1,
  beneficiary_provider: undefined,
  payer_provider: undefined,
  status: undefined,
  type: undefined,
  //   user_id: undefined,
  limit: 10,
}

export const useTransactionFiltersStore = defineStore('filters', () => {
  const { currentCountry: country } = storeToRefs(useCountryStore())
  const q = ref(initialFilters.q)
  const page = ref(initialFilters.page)
  const beneficiary_provider = ref(initialFilters.beneficiary_provider)
  const payer_provider = ref(initialFilters.payer_provider)
  const status = ref(initialFilters.status)
  const type = ref(initialFilters.type)
  //   const user_id = ref(initialFilters.user_id)
  const limit = ref(initialFilters.limit)
  const country_code = ref(initialFilters.country_code)

  const route = useRoute()

  watch(
    () => route.name,
    (n, o) => {
      if (
        q.value != initialFilters.q ||
        page.value != initialFilters.page ||
        beneficiary_provider.value != initialFilters.beneficiary_provider ||
        payer_provider.value != initialFilters.payer_provider ||
        status.value != initialFilters.status ||
        type.value != initialFilters.type ||
        limit.value != initialFilters.limit ||
        country_code.value != initialFilters.country_code
      ) {
        q.value = initialFilters.q
        page.value = initialFilters.page
        beneficiary_provider.value = initialFilters.beneficiary_provider
        payer_provider.value = initialFilters.payer_provider
        status.value = initialFilters.status
        type.value = initialFilters.type
        limit.value = initialFilters.limit
        country_code.value = initialFilters.country_code
      }
    },
  )

  return {
    q,
    page,
    beneficiary_provider,
    payer_provider,
    status,
    type,
    // user_id,
    limit,
    country_code,
  }
})
