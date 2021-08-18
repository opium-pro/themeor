export let obfuscate = false
export let isNative = false


let hashCounter = 0
const hashed: { [key: string]: string } = {}


export function setObfuscate(value: boolean) {
  obfuscate = value
}


export function setIsNative(value: boolean) {
  isNative = value
}


export function hash(value?: any, update?: boolean) {
  if (!hashed[value] || update) {
    hashed[value] = (hashCounter++).toString(16).toUpperCase()
  }
  return hashed[value]
}