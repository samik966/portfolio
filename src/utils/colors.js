export function hexToRgb (hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

export const colorsNumeric = (hex) => {
  if (hex.charAt(0) !== '#') {
    return hex
  }
  const {r, g, b} = hexToRgb(hex)
  return [r, g, b]
}
