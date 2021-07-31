export default function scale (): string[] {
  return [`"x3s"`, `"x2s"`, `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"x2l"`, `"x3l"`]
}

export const isInScale = (value?: string | number | boolean): boolean => {
  if (typeof value !== 'string') {return false}
  return scale().includes(value)
}