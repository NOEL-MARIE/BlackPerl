import { i18n } from '@/locales'
import { z } from 'zod'

export const notificationSchema = z.object({
  title: z
    .string({ required_error: i18n.global.t('login.validation.username') })
    .min(1, { message: i18n.global.t('login.validation.username') })
    .trim(),
  message: z
    .string({ required_error: i18n.global.t('login.validation.password') })
    .min(1, { message: i18n.global.t('login.validation.password') })
    .trim(),
})

// export const adminRoleSchema = z.object({
//   name: z
//     .string({ required_error: i18n.global.t('login.validation.name') })
//     .min(1, { message: i18n.global.t('login.validation.username') })
//     .trim(),
// })
