// import { env } from '@/config/env'
import type { TransactionFiltersPayload } from '../global.type'
import { Http } from '../Http'
import { TransactionRouteApi } from './transaction-constants'
import type {
  TransactionResponse,
  TransactionStatutUpdatePayload,
  TransactionUpdatePayload,
} from './transaction-type'

export async function fetchFiltersTransactionsApi({
  payload,
}: {
  payload: TransactionFiltersPayload
}): Promise<SuccessResponse<PaginationResponse<TransactionResponse>> | undefined> {
  const result = await Http.get<SuccessResponse<PaginationResponse<TransactionResponse>>>(
    TransactionRouteApi.filter,
    payload,
  )

  return result
}

export async function updateTransactionApi({
  id,
  data,
}: {
  id: string
  data: TransactionUpdatePayload
}): Promise<SuccessResponse<any> | undefined> {
  return await Http.put<SuccessResponse<any>>(`${TransactionRouteApi.default}/${id}`, data)
}
export async function updateTransactionStatusApi({
  id,
  data,
}: {
  id: string
  data: TransactionStatutUpdatePayload
}): Promise<SuccessResponse<any> | undefined> {
  return await Http.put<SuccessResponse<any>>(`${TransactionRouteApi.updateStatus(id)}`, data)
}

export async function fetchUserTransactionsByIdApi({
  id,
}: {
  id: string
}): Promise<SuccessResponse<PaginationResponse<TransactionResponse>> | undefined> {
  return await Http.get<SuccessResponse<PaginationResponse<TransactionResponse>>>(
    `${TransactionRouteApi.default}`,
    {},
    {
      params: {
        user_id: id,
      },
    },
  )
}
