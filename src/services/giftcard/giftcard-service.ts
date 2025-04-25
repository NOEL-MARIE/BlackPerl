import type { DefaultFiltersPayload } from '../global.type'
import { fetchFiltersGiftCardsApi } from './giftcard-api'
import type { GiftCardResponse } from './giftcard-type'

export async function fetchFiltersGiftCards(
  payload: DefaultFiltersPayload,
): Promise<PaginationResponse<GiftCardResponse> | undefined> {
  try {
    let payloadData = { ...payload }
    const res = await fetchFiltersGiftCardsApi({
      payload,
    })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}
