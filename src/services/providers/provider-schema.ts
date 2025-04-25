import { i18n } from '@/locales'
import { z } from 'zod'

export const providerSchema = z.object({
  name: z
    .string({ required_error: i18n.global.t('login.validation.username') })
    .min(1, { message: i18n.global.t('login.validation.username') })
    .trim(),
  image_url: z
    .string({ required_error: i18n.global.t('login.validation.username') })
    .min(1, { message: i18n.global.t('login.validation.username') })
    .trim(),
})
