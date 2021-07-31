export default function getScales (): string[] {
  return ["x3s", "x2s", "xs", "sm", "md", "lg", "xl", "x2l", "x3l"]
}

export const baseScales = getScales()
export const extendedScales = [...baseScales, 'max', 'none']

export const fontWeightScales = ['100', '200', '300', '400', '500', '600', '700', '800', '900',]
export const fontFamilyScales = ['regular', 'special']

export const allScales = [...extendedScales, ...fontWeightScales, ...fontFamilyScales]

export const isInScale = (value?: string | number | boolean): boolean => {
  if (typeof value !== 'string') {return false}
  return allScales.includes(value)
}