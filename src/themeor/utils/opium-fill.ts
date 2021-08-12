export const shifts = ["up", "down"]
export const baseFills = ["base", "faint", "accent", "complement", "critic", "warning", "success"]

export default function getFills (up: boolean = false, down: boolean = false, clean: boolean = true): string[] {
  const result: string[] = []

  for (let color of baseFills) {
    if (clean) {
      result.push(`${color}`)
    }
    if (up) {
      result.push(`${color}-${shifts[0]}`)
    }
    if (down) {
      result.push(`${color}-${shifts[1]}`)
    }
  }

  return result
}

export const allFills = [...getFills(true, true), 'none']

export function isInFills (value?: string | number | boolean): boolean {
  if (typeof value !== 'string') {return false}

  return allFills.includes(value)
}