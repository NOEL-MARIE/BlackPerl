// import type { AdminFiltersPayload } from './country-type'

import type { DashboardFiltersPayload, DefaultFiltersPayload } from '../global.type'

export const dashboardQueryKeys = {
  // admins: (country: string) => ['admins', country],
  dashboards: ['dashboard'],
  dashboardsFilters: (payload: DashboardFiltersPayload) => [
    'dashboards',
    payload.dates,
    payload.country,
  ],
}
