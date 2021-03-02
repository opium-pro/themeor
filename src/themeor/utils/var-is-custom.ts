export default function(variable?: string | false): boolean {
  if (!variable) {
    return false
  } else if (variable.includes('--')) {
    return true
  }
  return false
}