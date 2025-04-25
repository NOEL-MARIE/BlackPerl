import { z } from 'zod'

import type { CountryResponse } from '../country/country-type'
import type { userSchema } from './user-schema'

export type UserForm = z.infer<typeof userSchema>

export type UserRequest = UserForm & {
  country_id: string
}
export enum VerificationStatusEnum {
  UNVERIFIED = 'unverified',
  VERIFIED = 'verified',
}

export type UsersStatsResponse = {
  count_users: number
  count_users_in_progress: number
  count_users_unverified: number
  count_users_verified: number
  current_month_users_count: number
  last_day_users_count: number
  last_month_users_count: number
  today_users_count: number
  monthly_stats: MonthlyStat[]
  daily_stats: DailyStat[]
}

export type UserResponse = {
  active: boolean
  avatar: string
  birthdate: string
  country: CountryResponse
  country_id: string
  created_at: string
  email?: string
  email_verified: boolean
  firstname?: string
  id: string
  lastname?: string
  password: string
  phone: string
  phone_verified: boolean
  pin_code: string
  referral_code: string
  referred_by: string
  updated_at: string
  validated_phone_numbers: string[]
  verification_status: VerificationStatusEnum
  x_id: string
}
export type UserUpdatePayload = {
  accepted_tos?: boolean
  active?: boolean
  avatar?: string
  birthdate?: string
  country_id?: string
  email?: string
  email_verified?: boolean
  firstname?: string
  is_superuser?: boolean
  lastname?: string
  password?: string
  phone?: string
  phone_verified?: boolean
  pin_code?: string
  referral_code?: string
  referred_by?: string
  reward_amount?: number
  role_id?: string
  verification_status?: string
  withdrawn_amount?: number
}

export interface MonthlyStat {
  month: string
  year: number
  user_count: number
}

export interface DailyStat {
  date: string
  day_name: string
  user_count: number
}
