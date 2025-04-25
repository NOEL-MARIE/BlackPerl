// import { env } from '@/config/env'
import type { DefaultFiltersPayload } from '../global.type'
import { Http } from '../Http'
import { AdminRouteApi } from './admin-constants'
import type {
  AdminRequest,
  AdminResponse,
  AdminRoleRequest,
  AdminUpdatePayload,
  RoleResponse,
} from './admin-type'

// const mock = new MockAdapter(axios.create())

export async function createAdminApi(
  data: AdminRequest,
): Promise<SuccessResponse<AdminResponse> | undefined> {
  const result = await Http.post<SuccessResponse<AdminResponse>>('/admin/api/v1/user', data, {
    // headers: {
    //   'Device-Id': getDeviceId(),
    // },
  })

  return result
}
export async function createRolAdminApi(
  data: AdminRoleRequest,
): Promise<SuccessResponse<any> | undefined> {
  const result = await Http.post<SuccessResponse<any>>('/admin/api/v1/role', data, {
    // headers: {
    //   'Device-Id': getDeviceId(),
    // },
  })

  return result
}

export async function fetchAdminsApi(
  page: number,
): Promise<SuccessResponse<PaginationResponse<AdminResponse>> | undefined> {
  const result = await Http.get<SuccessResponse<PaginationResponse<AdminResponse>>>('/admins', {
    page,
  })
  return result
}
export async function fetchRolesApi(
  page: number,
): Promise<SuccessResponse<PaginationResponse<RoleResponse>> | undefined> {
  const result = await Http.get<SuccessResponse<PaginationResponse<RoleResponse>>>(
    '/admin/api/v1/role',
    {
      page,
    },
  )
  return result
}

export async function fetchFiltersAdminsApi({
  payload,
}: {
  payload: DefaultFiltersPayload
}): Promise<SuccessResponse<PaginationResponse<AdminResponse>> | undefined> {
  const result = await Http.get<SuccessResponse<PaginationResponse<AdminResponse>>>(
    // AdminRouteApi.filter,
    '/admin/api/v1/user/admins',
    payload,
  )

  return result
}
export async function fetchAdminByIdApi({
  id,
}: {
  id: string
}): Promise<SuccessResponse<AdminResponse> | undefined> {
  return await Http.get<SuccessResponse<AdminResponse>>(`/admin/api/v1/user/${id}`)
}

export async function updateAdminApi({
  id,
  data,
}: {
  id: string
  data: AdminUpdatePayload
}): Promise<SuccessResponse<AdminResponse> | undefined> {
  return await Http.put<SuccessResponse<AdminResponse>>(`/admin/api/v1/user/${id}`, data)
}
