export interface DashboardResponse {
  count_txns_group_by_status: Status[]
  count_txns_group_by_type_and_month: CountTxnsGroupByTypeAndMonth[]
  current_period_stats: CurrentPeriodStats
  previous_period_stats: PreviousPeriodStats
  sum_collected_txns_group_by_provider: SumTxnsGroupByProvider[]
  sum_transfered_txns_group_by_provider: SumTxnsGroupByProvider[]
  sum_txns_group_by_provider_and_type: SumTxnsGroupByProviderAndType[]
  txns_recents: TxnsRecent[]
}

// YANN
export interface CustomChartDataBloc {
  sum_txns: number
  sum_txns_group_by_provider?: SumTxnsGroupByProvider[]
  current_period_stats?: CustomPeriodStats
  previous_period_stats?: CustomPeriodStats
}
export interface CustomGiftCardDataBloc {
  total: number
  current_period_stats: CustomPeriodGiftCardStats
  previous_period_stats: CustomPeriodGiftCardStats
}

export interface CustomPeriodStats {
  count_txns: number
  sum_txns: number
}
export interface CustomPeriodGiftCardStats {
  calculated_total: number
  // sum_txns: number
}

// YANN

export interface Status {
  count_txns: number
  status: string
}

export interface CountTxnsGroupByTypeAndMonth {
  count_txns: number
  month: number
  type: string
  year: number
}

export interface CurrentPeriodStats {
  count_collected_txns: number
  count_giftcard_txns: number
  count_transferts_txns: number
  count_txns: number
  sum_collected_txns: number
  sum_giftcard_txns: number
  sum_transfered_txns: number
}

export interface PreviousPeriodStats {
  count_collected_txns: number
  count_giftcard_txns: number
  count_transferts_txns: number
  count_txns: number
  sum_collected_txns: number
  sum_giftcard_txns: number
  sum_transfered_txns: number
}

export interface SumTxnsGroupByProvider {
  provider: string
  sum_txns: number
}

export interface SumTxnsGroupByProviderAndType {
  provider: string
  sum_txns: number
  type: string
}

export interface TxnsRecent {
  amount: number
  beneficiary_country_code: string
  beneficiary_name: string
  beneficiary_phone: string
  beneficiary_provider: BeneficiaryProvider
  beneficiary_provider_id: string
  cashin_fees: number
  cashout_fees: number
  created_at: string
  currency: string
  fees: number
  gift_card: GiftCard
  gift_card_id: string
  id: string
  payer_country_code: string
  payer_name: string
  payer_pays_fees: boolean
  payer_phone: string
  payer_provider: PayerProvider
  payer_provider_id: string
  payment_status: string
  payment_transaction_id: string
  payment_url: string
  reference: string
  status: string
  transfer_status: string
  transfer_transaction_id: string
  type: string
  updated_at: string
  user: User
  user_id: string
}

export interface BeneficiaryProvider {
  country: Country
  country_id: string
  created_at: string
  id: string
  image_url: string
  name: string
  service_availability: ServiceAvailability
  updated_at: string
  x_id: string
}

export interface Country {
  code: string
  id: string
  iso_code: string
  name: string
  phonenumber_length: number
  x_id: string
}

export interface ServiceAvailability {
  cashin_enabled: boolean
  cashin_issuer: CashinIssuer
  cashin_issuer_id: string
  cashout_enabled: boolean
  cashout_issuer: CashoutIssuer
  cashout_issuer_id: string
  created_at: string
  id: string
  provider: string
  provider_id: string
  updated_at: string
  x_id: string
}

export interface CashinIssuer {
  cashin_rate: number
  cashout_rate: number
  id: string
  name: string
  x_id: string
}

export interface CashoutIssuer {
  cashin_rate: number
  cashout_rate: number
  id: string
  name: string
  x_id: string
}

export interface GiftCard {
  brand: string
  code: string
  created_at: string
  id: string
  image_url: string
  order_reference: string
  price_in_cfa: number
  product: string
  purchase_price: number
  serial: string
  updated_at: string
  x_id: string
}

export interface PayerProvider {
  country: Country2
  country_id: string
  created_at: string
  id: string
  image_url: string
  name: string
  service_availability: ServiceAvailability2
  updated_at: string
  x_id: string
}

export interface Country2 {
  code: string
  id: string
  iso_code: string
  name: string
  phonenumber_length: number
  x_id: string
}

export interface ServiceAvailability2 {
  cashin_enabled: boolean
  cashin_issuer: CashinIssuer2
  cashin_issuer_id: string
  cashout_enabled: boolean
  cashout_issuer: CashoutIssuer2
  cashout_issuer_id: string
  created_at: string
  id: string
  provider: string
  provider_id: string
  updated_at: string
  x_id: string
}

export interface CashinIssuer2 {
  cashin_rate: number
  cashout_rate: number
  id: string
  name: string
  x_id: string
}

export interface CashoutIssuer2 {
  cashin_rate: number
  cashout_rate: number
  id: string
  name: string
  x_id: string
}

export interface User {
  active: boolean
  avatar: string
  birthdate: string
  country: Country3
  country_id: string
  created_at: string
  email: string
  email_verified: boolean
  firstname: string
  id: string
  lastname: string
  password: string
  phone: string
  phone_verified: boolean
  pin_code: string
  referral_code: string
  referred_by: string
  updated_at: string
  validated_phone_numbers: string[]
  verification_status: string
  x_id: string
}

export interface Country3 {
  code: string
  id: string
  iso_code: string
  name: string
  phonenumber_length: number
  x_id: string
}
