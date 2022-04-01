let hashCounter = 0
const hashed: { [key: string]: string } = {}


export const config = {
  obfuscate: false,
  isNative: false,
  CommonTag: 'div' as any,
  hash(value?: any, update?: boolean) {
    if (!hashed[value] || update) {
      hashed[value] = (hashCounter++).toString(16).toUpperCase()
    }
    return hashed[value]
  },
}