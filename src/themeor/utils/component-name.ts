import { config } from '../config.js'

export function componentName(name: string) {
  return config.obfuscate ? config.hash(name) : name
}