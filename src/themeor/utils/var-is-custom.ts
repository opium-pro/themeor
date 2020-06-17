export default function(variable?: string): boolean {
  if (!variable) {
    return false
  } else if (variable.includes('--')) {
    return true
  }
  return false
}