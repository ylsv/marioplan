export function formatSecondsToDate(seconds) {
  const dateToFormat = new Date(seconds * 1000)
  const formattedDate = new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    hour12: false,
    month: 'long',
    year: 'numeric',
  }).format(dateToFormat)
  return formattedDate
}
