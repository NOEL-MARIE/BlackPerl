import type { TransactionFiltersPayload } from '../global.type'
import {
  fetchFiltersTransactionsApi,
  fetchUserTransactionsByIdApi,
  updateTransactionApi,
  updateTransactionStatusApi,
} from './transaction-api'
import type {
  TransactionResponse,
  TransactionStatutUpdatePayload,
  TransactionUpdatePayload,
} from './transaction-type'

export async function fetchFiltersTransactions(
  payload: TransactionFiltersPayload,
): Promise<PaginationResponse<TransactionResponse> | undefined> {
  try {
    let payloadData = { ...payload }
    const res = await fetchFiltersTransactionsApi({
      payload,
    })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export async function updateTransaction({
  id,
  data,
}: {
  id: string
  data: TransactionUpdatePayload
}): Promise<any | undefined> {
  try {
    const res = await updateTransactionApi({
      data: data,
      id: id,
    })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}
export async function updateTransactionStatus({
  id,
  data,
}: {
  id: string
  data: TransactionStatutUpdatePayload
}): Promise<any | undefined> {
  try {
    const res = await updateTransactionStatusApi({
      data: data,
      id: id,
    })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export async function fetchUserTransactions({
  id,
}: {
  id: string
}): Promise<PaginationResponse<TransactionResponse> | undefined> {
  try {
    const res = await fetchUserTransactionsByIdApi({ id: id })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}
