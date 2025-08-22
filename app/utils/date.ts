export const formatDate = (dateString: string) => {
  // Adiciona a hora ao meio-dia para evitar problemas de timezone
  const parts = dateString.split('-')
  const year = parseInt(parts[0] || '0')
  const month = parseInt(parts[1] || '0')
  const day = parseInt(parts[2] || '0')

  // No JavaScript, meses são 0-indexed (janeiro = 0, dezembro = 11)
  const date = new Date(year, month - 1, day, 12, 0, 0)

  const dayNum = date.getDate()
  const monthName = date.toLocaleDateString('pt-BR', { month: 'long' })
  const yearNum = date.getFullYear()

  // Pega apenas as 3 primeiras letras do mês
  const shortMonth = monthName.substring(0, 3)

  return `${dayNum} ${shortMonth} ${yearNum}`.toUpperCase()
}
