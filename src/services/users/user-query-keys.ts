import type { DefaultFiltersPayload, UserFiltersPayload } from '../global.type'

export const usersQueryKeys = {
  // users: (country: string) => ['users', country],
  user: ({ id, country }: { id: string; country: string }) => ['user', id, country],
  userStats: ({ country }: { country: string }) => ['userStats', country],
  userPagination: (page: number) => ['user', page],
  userFilters: (payload: UserFiltersPayload) => [
    'user',
    payload.page,
    payload.q,
    // payload.country,
    payload.sort_by,
    payload.active,
    payload.sort_order,
  ],
}
