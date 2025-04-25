// import { env } from '@/config/env'
import type { DashboardFiltersPayload, DefaultFiltersPayload } from '../global.type'
import { Http } from '../Http'
import type { DashboardResponse } from './dashboard-alpha-type'
import { DashboardRouteApi } from './dashboard-constants'

export async function fetchFiltersDashboardApi({
  payload,
}: {
  payload: DashboardFiltersPayload
}): Promise<SuccessResponse<DashboardResponse> | undefined> {
  const formatPayload = {
    start_date: payload.dates![0].toISOString(),
    end_date: payload.dates![1].toISOString(),
    country: payload.country,
  }
  const result = await Http.get<SuccessResponse<DashboardResponse>>(
    DashboardRouteApi.default,
    formatPayload,
  )

  return result
}
