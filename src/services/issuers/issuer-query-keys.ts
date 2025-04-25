import type { DefaultFiltersPayload } from '../global.type'

export const issuersQueryKeys = {
  // users: (country: string) => ['users', country],
  issuer: ({ id }: { id: string }) => ['issuer', id],
  issuersPagination: (page: number) => ['issuers', page],
  issuersFilters: (payload: DefaultFiltersPayload) => [
    'issuers',
    payload.page,
    payload.q,
    payload.country,
  ],
}
