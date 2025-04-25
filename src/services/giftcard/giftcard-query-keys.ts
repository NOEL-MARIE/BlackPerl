// import type { AdminFiltersPayload } from './country-type'

import type { DefaultFiltersPayload } from '../global.type'

export const giftCardsQueryKeys = {
  // admins: (country: string) => ['admins', country],
  giftcards: ['giftcards'],
  giftCardsFilters: (payload: DefaultFiltersPayload) => [
    'giftcards',
    payload.page,
    payload.q,
    payload.dates,
    // payload.country,
  ],
}
