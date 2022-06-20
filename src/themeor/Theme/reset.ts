import jss from 'jss'

const styles = {
  '@global': {
    'body': {
      background: '#fff',
      lineHeight: 1,
      '-webkit-font-smoothing': 'antialiased',
    },

    '*': {
      margin: 0,
      padding: 0,
      border: 'none',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
      textDecoration: 'inherit',
      background: 'none',
      boxSizing: 'inherit',
      outline: 'none',
      textAlign: 'inherit',
      color: 'inherit',
    },

    [`article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section`]: {
      display: 'block',
    },

    'html, body': {
      '-webkit-text-size-adjust': 'none',
    },

    [`input:-webkit-autofill,
    input:-webkit-autofill:focus`]: {
      transition: 'background-color 600000s 0s, color 600000s 0s',
    },

    'ol, ul': {
      listStyle: 'none',
    },

    'blockquote, q': {
      quotes: 'none',
    },

    [`blockquote:before,
    blockquote:after,
    q:before,
    q:after`]: {
      content: 'none',
    },

    'button, input': {
      width: 'unset',
    },

    'button::-moz-focus-inner': {
      border: 0,
      display: 'block',
    },

    'table': {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },

    [`input[type = "search"]::-ms-clear,
    input[type = "search"]::-ms-reveal`]: {
      display: 'none',
      width: 0,
      height: 0,
    },

    [`input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration`]: {
      display: 'none',
    },
  },
}

jss.createStyleSheet(styles).attach()