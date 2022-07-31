export const capitalize = (str) => {
  if (!str) return str
  return str.split(' ').map(s => s[0].toUpperCase() + s.slice(1, s.length)).join(' ')
}