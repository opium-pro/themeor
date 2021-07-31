export default function getFills (up: boolean = false, down: boolean = false, clean: boolean = true): string[] {
  const result: string[] = []
  const parents = ["base", "faint", "accent", "complement", "critic", "warning", "success"]
  const shifts = ["up", "down"]

  for (let color of parents) {
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

export const baseFills = getFills()
export const allFills = getFills(true, true)

export function isInFills (value?: string | number | boolean): boolean {
  if (typeof value !== 'string') {return false}

  return allFills.includes(value)
}