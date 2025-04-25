import type { TransactionFiltersPayload } from '../global.type'

export const transactionQueryKeys = {
  // admins: (country: string) => ['admins', country],
  transaction: ({ id, country }: { id: string; country: string }) => ['transaction', id, country],
  transactionPagination: (page: number) => ['transaction', page],
  transactionFilters: (payload: TransactionFiltersPayload) => [
    'transaction',
    payload.limit,
    payload.page,
    payload.q,
    payload.beneficiary_provider,
    payload.payer_provider,
    payload.status,
    payload.type,
    payload.country,
  ],
}
