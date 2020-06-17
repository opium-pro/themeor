// Joining params into string of CSS classes

export default function className(...nameList: Array<string | boolean | undefined>): string {
  const result = []
  for (let name of nameList) {
    if (name && typeof name === 'string') {
      result.push(name)
    }
  }
  return result.join(' ')
}