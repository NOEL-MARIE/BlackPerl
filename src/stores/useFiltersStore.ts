import type { UserFiltersPayload } from '@/services/global.type'
import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const initialFilters: UserFiltersPayload = {
  q: undefined,
  page: 1,
  sort_by: undefined,
  active: undefined,
  sort_order: undefined,
}

export const useFiltersStore = defineStore('filters', () => {
  const q = ref(initialFilters.q)
  const page = ref(initialFilters.page)
  const sort_by = ref(initialFilters.sort_by)
  const active = ref(initialFilters.active)
  const sort_order = ref(initialFilters.sort_order)

  const route = useRoute()

  watch(
    () => route.name,
    (n, o) => {
      if (
        q.value != initialFilters.q ||
        page.value != initialFilters.page ||
        sort_by.value != initialFilters.sort_by ||
        active.value != initialFilters.active ||
        sort_order.value != initialFilters.sort_order
      ) {
        q.value = initialFilters.q
        page.value = initialFilters.page
        sort_by.value = initialFilters.sort_by
        active.value = initialFilters.active
        sort_order.value = initialFilters.sort_order
      }
    },
  )

  return {
    q,
    page,
    sort_by,
    active,
    sort_order,
  }
})
