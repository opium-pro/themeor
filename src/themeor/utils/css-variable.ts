function createNode(id: string) {
  const styleNode = document.createElement('style')
  styleNode.type = 'text/css'
  styleNode.id = id
  document.head.appendChild(styleNode)
  return styleNode
}

function unset(id: string) {
  const styleNode = document.getElementById(id)
  if (styleNode) {
    styleNode.innerHTML = ''
  }
}

function set (params: {
  json?: any,
  prefix?: string,
  selector?: string | boolean,
  exclude?: string,
  id: string,
}): void {

  if (!params.json || (params.prefix && (params.prefix === params.exclude))) {
    return
  }

  let styleNode = document.getElementById(params.id)
  if (!styleNode) {
    styleNode = createNode(params.id)
  }

  if (params.selector === undefined) {
    params.selector = ':root'
  }

  params.selector && styleNode.appendChild(document.createTextNode(`${params.selector}{`))

  if (typeof params.json === 'object') {
    for (let childName in params.json) {
      if (params.exclude === childName) {
        continue
      }

      set({
        json: params.json[childName],
        prefix: (params.prefix ? `${params.prefix}-` : '') + childName,
        selector: false,
        exclude: params.exclude,
        id: params.id,
      })
    }
  } else {
    styleNode.appendChild(document.createTextNode(`--${params.prefix}: ${params.json};`))
  }

  params.selector && styleNode.appendChild(document.createTextNode('}'))
}


export default {
  set,
  unset,
}