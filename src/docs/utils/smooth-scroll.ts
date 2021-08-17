export default function(event: any) {
  let href: any = ''

  if (typeof event === 'string') {
    href = `#${event}`
  } else {
    event.preventDefault()
    href = event.target.getAttribute('href')

    setTimeout(() => {
      window.location = href
    }, 700)
  }
  

  const target = document.querySelector(href)
  target?.scrollIntoView({behavior: 'smooth',})
}