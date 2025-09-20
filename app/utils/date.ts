export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number)
  const date = new Date(year, (month || 1) - 1, day || 1, 12, 0, 0)

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
  return formatter.format(date).toUpperCase()
}
