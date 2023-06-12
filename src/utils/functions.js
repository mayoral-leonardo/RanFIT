import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import isToday from 'dayjs/plugin/isToday'
const serverTz = 'America/Sao_Paulo'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isToday)

export function translateLevel(level) {
  const translatedLevels = {
    admin: "Administrador",
    goer: "Usuário"
  }

  return translatedLevels[level]
}

export function timeAsDayjs (value = new Date(), options) {
  const server = options?.server
  const applyTimezone = options?.applyTimezone

  let timezone = dayjs.tz.guess()

  if (!(applyTimezone ?? true)) timezone = 'GMT'
  else if (server ?? false) timezone = serverTz

  return dayjs.tz(value, timezone)
}