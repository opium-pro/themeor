// Get CSS values from strings and makes some changes with it

export const double = (value?: string | number | false) => {
  if (!value) {return}

  const splitted = split(value)
  return [splitted[0] * 2, splitted[1]].join('')
}


export const half = (value?: string | number | false) => {
  if (!value) {return}

  const splitted = split(value) || [0]
  return [splitted[0] / 2, splitted[1]].join('')
}

export const minus = (value?: string | number | false) => {
  if (!value) {return}

  const splitted = split(value) || [0]
  return [-splitted[0], splitted[1]].join('')
}


export const split = (value: string | number): [number: number, measurement?: string] => {
  const number = typeof value === 'number' ? value : parseInt(value)
  const indexOfMeasurement = typeof value === 'number' ? 0 : value.toString().indexOf(number.toString())
  const measurement = typeof value === 'number' ? '' : value.toString().slice(indexOfMeasurement, value.length)

  return [number, measurement]
}