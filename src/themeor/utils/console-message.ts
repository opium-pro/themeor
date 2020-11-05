export default function({text, type = 'warn', source}: {
  text: string,
  type?: 'error' | 'warn' | 'info',
  source?: any,
}) {

  let component = ''
  if (typeof source === 'function') {
    component = `Component — <${source.name} />`

  } else if (typeof source === 'object' && source.constructor) {
    component = `Component — <${source.constructor.name} />`

  } else if (typeof source === 'string') {
    component = `Component — ${source}`
  }

  const message = `From Themeor (http://themeor.opium.pro)

${component}

${text}
`
  console[type](message)
}