import type { DefaultFiltersPayload, UserFiltersPayload } from '../global.type'

export const providersQueryKeys = {
  // users: (country: string) => ['users', country],
  provider: ({ country, id }: { country: string; id: string }) => ['provider', country, id],
  providersPagination: (page: number, country: string) => ['provider', page, country],
  providersFilters: (payload: DefaultFiltersPayload) => [
    'provider',
    payload.page,
    payload.q,
    payload.country,
  ],
  serviceAvailability: ({ country }: { country: string }) => ['serviceAvailability', country],
}
