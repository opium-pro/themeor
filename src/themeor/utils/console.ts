function getMessage(text: string, source?: any) {

  let component = ''
  if (typeof source === 'function') {
    component = `Component — <${source.name} />`

  } else if (typeof source === 'object' && source.constructor) {
    component = `Component — <${source.constructor.name} />`

  } else if (typeof source === 'string') {
    component = `Component — ${source}`
  }

  const message = `From 'Themeor' (http://themeor.opium.pro)

${component}

${text}
`
  return message
}


export function error(text: string, source?: any) {
  const message = getMessage(text, source)
  console.error(message)
}


export function warn(text: string, source?: any) {
  const message = getMessage(text, source)
  console.warn(message)
}


export function info(text: string, source?: any) {
  const message = getMessage(text, source)
  console.info(message)
}