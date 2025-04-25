import { getProviderColor, setProviderColor } from '../auth/auth-util'
import type { DashboardFiltersPayload, DefaultFiltersPayload } from '../global.type'
import type { DashboardResponse } from './dashboard-alpha-type'
import { fetchFiltersDashboardApi } from './dashboard-api'

export async function fetchFiltersDashboard(
  payload: DashboardFiltersPayload,
): Promise<DashboardResponse | undefined> {
  try {
    let payloadData = { ...payload }
    const res = await fetchFiltersDashboardApi({
      payload,
    })

    for (let index = 0; index < res!.data!.sum_collected_txns_group_by_provider.length; index++) {
      const element = res!.data!.sum_collected_txns_group_by_provider[index]
      if (!getProviderColor(element.provider)) {
        setProviderColor(element.provider)
      }
    }

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}
