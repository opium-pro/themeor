export function createStyleNode(id: string) {
  const styleNode = document.createElement('style')
  styleNode.type = 'text/css'
  styleNode.id = id
  document.head.appendChild(styleNode)
  return styleNode
}


export function unsetStyles (id: string) {
  const styleNode = document.getElementById(id)
  if (styleNode) {
    styleNode.innerHTML = ''
  }
}


export function setStyles (id: string, textNode: string): void {
  const styleNode = document.getElementById(id) || createStyleNode(id)
  styleNode.innerHTML = textNode
}


export function addStyles (id: string, textNode: string): void {
  const styleNode = document.getElementById(id) || createStyleNode(id)
  styleNode.appendChild(document.createTextNode(textNode))
}