// Get CSS values from strings and makes some changes with it

export const double = (value?: string | number | false) => {
  if (!value) { return }
  return changeValue(value, v => v * 2)
}


export const half = (value?: string | number | false) => {
  if (!value) { return }
  return changeValue(value, v => v / 2)
}

export const minus = (value?: string | number | false) => {
  if (!value) { return }
  return changeValue(value, v => -v)
}


export const changeValue = (value: string | number = 0, action: (value: number) => number = v => v): string | number => {
  const isNumber = typeof value === 'number'
  const number = isNumber ? value : parseInt(value)
  const indexOfMeasurement = typeof value === 'number' ? 0 : number.toString().length
  const measurement = typeof value === 'number' ? '' : value.toString().slice(indexOfMeasurement, value.length)
  const result = action(number)
  return isNumber ? result : `${result}${measurement}`
}