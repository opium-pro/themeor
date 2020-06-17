export default function(params: {
  text: string,
  type?: 'error' | 'warn' | 'info',
  source?: any
}) {

  const type = params.type || 'warn'
  const component = params.source && `Source — <${params.source.constructor.name} />`

  const message = `From Themeor (http://themeor.opium.pro)

${component || ''}

${params.text}
`
  console[type](message)
}