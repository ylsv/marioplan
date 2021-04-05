export function formatSecondsToDate(seconds) {
  const dateToFormat = new Date(seconds * 1000)
  const formattedDate = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(dateToFormat)
  return formattedDate
}
