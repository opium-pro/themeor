export default function (fill?: string | false):string {
  if (!fill) {
    return ''
  }

  if (fill.includes('--')) {
    return fill
  } else if (fill === 'none') {
    return 'base'
  } else if (fill.includes('-')) {
    return fill.split('-')[0]
  } else {
    return fill
  }
}