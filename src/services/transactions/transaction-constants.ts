enum AdminRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  VIEWER = 'VIEWER',
  // Ajoutez d'autres rôles selon vos besoins
}

export const TransactionRouteApi = {
  default: '/admin/api/v1/transaction',
  getOne: (id: string) => `/admin/api/v1/transaction/${id}`,
  updateStatus: (id: string) => `/admin/api/v1/transaction/${id}/status`,
  filter: '/admin/api/v1/transaction',
}

export { AdminRole }
