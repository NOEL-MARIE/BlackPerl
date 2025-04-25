import type { DefaultFiltersPayload } from '../global.type'
import {
  createAdminApi,
  createRolAdminApi,
  fetchAdminByIdApi,
  fetchAdminsApi,
  fetchFiltersAdminsApi,
  fetchRolesApi,
  updateAdminApi,
} from './admin-api'
import type {
  AdminRequest,
  AdminResponse,
  AdminRoleRequest,
  AdminUpdatePayload,
  RoleResponse,
} from './admin-type'

export async function fetchAdmins(
  page: number,
): Promise<PaginationResponse<AdminResponse> | undefined> {
  try {
    const res = await fetchAdminsApi(page)

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}
export async function fetchFiltersAdmins(
  payload: DefaultFiltersPayload,
): Promise<PaginationResponse<AdminResponse> | undefined> {
  try {
    let payloadData = { ...payload }
    const res = await fetchFiltersAdminsApi({
      payload,
    })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export async function createAdmin(data: AdminRequest): Promise<AdminResponse | undefined> {
  try {
    const res = await createAdminApi(data)

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export async function updateAdmin({
  id,
  data,
}: {
  id: string
  data: AdminUpdatePayload
}): Promise<AdminResponse | undefined> {
  try {
    const res = await updateAdminApi({
      data: data,
      id: id,
    })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export async function fetchOneAdmin({ id }: { id: string }): Promise<AdminResponse | undefined> {
  try {
    const res = await fetchAdminByIdApi({ id: id })

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export async function createRoleAdmin(data: AdminRoleRequest): Promise<any | undefined> {
  try {
    const res = await createRolAdminApi(data)

    return res
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export async function fetchRoles(
  page: number,
): Promise<PaginationResponse<RoleResponse> | undefined> {
  try {
    const res = await fetchRolesApi(page)

    return res?.data
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}
