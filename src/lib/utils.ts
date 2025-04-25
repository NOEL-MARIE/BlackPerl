import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value = typeof updaterOrValue === 'function' ? updaterOrValue(ref.value) : updaterOrValue
}

export const formatRelativeDate = (date: Date): string => {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
  const inputDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

  // Formater l'heure
  const timeFormatter = new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // Utiliser le format 24h
  })

  const timeString = `à ${timeFormatter.format(date)}`

  // Comparer les dates
  if (inputDate.getTime() === today.getTime()) {
    return `Aujourd’hui ${timeString}`
  } else if (inputDate.getTime() === yesterday.getTime()) {
    return `Hier ${timeString}`
  } else {
    // Formater la date pour les autres cas
    const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    return `${dateFormatter.format(date)} ${timeString}`
  }
}

export const formatPhoneNumber = (phone: string): string => `+225${phone}`

export const copyToClipBoard = (text: string) => {
  navigator.clipboard.writeText(text)
}

export const generateColor = (): string => {
  return Math.floor(Math.random() * 16777215).toString(16)
}
