export type DefaultFiltersPayload = {
  q?: string
  page: number
  country?: string
  dates?: [Date, Date]
}
export type UserFiltersPayload = DefaultFiltersPayload & {
  sort_by?: string
  sort_order?: string
  active?: boolean
}
export type TransactionFiltersPayload = DefaultFiltersPayload & {
  status?: string
  type?: string
  payer_provider?: string
  beneficiary_provider?: string
  user_id?: string
  limit: number
  country_code?: string
}
export type NotificationFiltersPayload = DefaultFiltersPayload & {
  countries?: string[]
}

export type DashboardFiltersPayload = {
  country?: string
  dates?: [Date, Date]
}
