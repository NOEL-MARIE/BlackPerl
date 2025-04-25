import type { DefaultFiltersPayload } from '../global.type'

export const adminQueryKeys = {
  // admins: (country: string) => ['admins', country],
  admin: ({ id, country }: { id: string; country: string }) => ['admin', id, country],
  adminPagination: (page: number) => ['admin', page],
  adminFilters: (payload: DefaultFiltersPayload) => [
    'admin',
    payload.page,
    payload.q,
    payload.country,
  ],
}
