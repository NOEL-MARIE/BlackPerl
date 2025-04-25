import type { DefaultFiltersPayload, UserFiltersPayload } from '../global.type'
import {
  fetchFiltersUsersApi,
  fetchUserByIdApi,
  fetchUsersApi,
  fetchUsersStatsApi,
  updateUserApi,
} from './user-api'
import type { UserResponse, UsersStatsResponse, UserUpdatePayload } from './user-type'

export async function fetchUsers(
  page: number,
): Promise<PaginationResponse<UserResponse> | undefined> {
  try {
    const res = await fetchUsersApi(page)

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}
export async function fetchFiltersUsers(
  payload: UserFiltersPayload,
): Promise<PaginationResponse<UserResponse> | undefined> {
  try {
    let payloadData = { ...payload }
    const res = await fetchFiltersUsersApi({
      payload,
    })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export async function fetchUserById({ id }: { id: string }): Promise<UserResponse | undefined> {
  try {
    const res = await fetchUserByIdApi({ id: id })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}
export async function fetchUsersStats({
  country_id,
}: {
  country_id: string
}): Promise<UsersStatsResponse | undefined> {
  try {
    const res = await fetchUsersStatsApi({
      country_id: country_id,
    })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export async function updateUser({
  id,
  data,
}: {
  id: string
  data: UserUpdatePayload
}): Promise<any | undefined> {
  try {
    const res = await updateUserApi({
      data: data,
      id: id,
    })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}
