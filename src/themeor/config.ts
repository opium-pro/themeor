export let obfuscate = true

export let isNative = false

let hashCounter = 0
const hashed: { [key: string]: number } = {}

export function setObfuscate(value: boolean) {
  obfuscate = value
}

export function setIsNative(value: boolean) {
  isNative = value
}

export function hash(value: string, update?: boolean) {
  if (!hashed[value] || update) {
    hashed[value] = hashCounter++
  }
  const hash = hashed[value].toString(16).toUpperCase()
  return hash
}