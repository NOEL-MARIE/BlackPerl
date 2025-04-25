// import { env } from '@/config/env'
import type { DefaultFiltersPayload } from '../global.type'
import { Http } from '../Http'
import { GiftCardRouteApi } from './giftcard-constants'
import type { GiftCardResponse } from './giftcard-type'

export async function fetchFiltersGiftCardsApi({
  payload,
}: {
  payload: DefaultFiltersPayload
}): Promise<SuccessResponse<PaginationResponse<GiftCardResponse>> | undefined> {
  const result = await Http.get<SuccessResponse<PaginationResponse<GiftCardResponse>>>(
    // AdminRouteApi.filter,
    GiftCardRouteApi.getAll,
    payload,
  )

  return result
}
