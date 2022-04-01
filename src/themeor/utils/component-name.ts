import { config } from '../config'

export function componentName(name: string) {
  return config.obfuscate ? config.hash(name) : name
}