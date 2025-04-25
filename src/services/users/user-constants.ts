// enum AdminRole {
//   SUPER_ADMIN = 'SUPER_ADMIN',
//   ADMIN = 'ADMIN',
//   EDITOR = 'EDITOR',
//   VIEWER = 'VIEWER',
//   // Ajoutez d'autres rôles selon vos besoins
// }

export const UserRouteApi = {
  default: '/admin/api/v1/user',
  getOne: (id: string) => `/admin/api/v1/user/${id}`,
  filter: '/admin/api/v1/user',
  getStats: '/admin/api/v1/user/stats',
}

// export { AdminRole }
