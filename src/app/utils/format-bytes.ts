export function formatBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  let unitIndex = 0

  // Divida o número de bytes até encontrar a unidade adequada
  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024
    unitIndex++
  }

  // Retorna a string formatada com uma casa decimal e a unidade correspondente
  return `${bytes.toFixed(1)}${units[unitIndex]}`
}
