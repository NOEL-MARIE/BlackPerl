import { z } from 'zod'

import type { issuerSchema } from './issuer-schema'

export type IssuerForm = z.infer<typeof issuerSchema>

export type IssuerRequest = IssuerForm & {
  // country_id: string
}

export type IssuerResponse = {
  cashin_rate: number
  cashout_rate: number
  id: string
  name: string
  x_id: string
}

export type IssuerUpdatePayload = {
  cashin_rate?: number
  cashout_rate?: number

  name?: string
}
