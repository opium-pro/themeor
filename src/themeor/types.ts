export type ColorFamily = 'base' | 'faint' | 'accent' | 'complement' | 'critic' | 'warning' | 'success'
export type ColorShift = 'up' | 'down'
export type FontFamily = 'regular' | 'special'
export type Scale = 'x3s' | 'x2s' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' |'x2l' | 'x3l'

export type Fill = {
  [X in ColorFamily]?: {
    strong?: string,
    weak?: string,
    'strong-up'?: string,
    'strong-down'?: string,
    'weak-up'?: string,
    'weak-down'?: string,
  }
}

export type ThemeConfig = any | {
  meta?: {
    name?: string,
    version?: string,
    contact?: string,
    description?: string,
    other?: any,
  },

  // This part will be passed to Theme Context
  themeContext?: any,

  // Here you can add your custom css vars
  customVariables?: object,

  // This is to form CSS variables for the theme
  fill?: Fill,
  'fancy-fill'?: Fill,
  box?: {
    radius?: {[X in Scale]: string},
    shadow?: {[X in Scale]: string},
    blur?: {[X in Scale]: string},
    'shadow-inner'?: {[X in Scale]: string},
    glow?: {[X in Scale]: string},
    fill?: Fill,
  },
  font?: {
    size?: {[X in Scale]?: string},
    family?: {[X in FontFamily]?: string},
    'line-height': {[X in Scale]?: string},
    'letter-spacing'?: {[X in Scale]?: string},
    fill?: Fill,
  },
  line?: {
    weight?: {[X in Scale]?: string},
    fill?: Fill,
  },
  icon?: {
    size?: {[X in Scale]?: string},
    fill?: Fill,
  },
  gap?: {[X in Scale]?: string},
  reaction?: {
    speed?: {[X in Scale]?: string}
  },
  effect?: {
    transparency?: {[X in Scale]?: string},
  }
}

export type ThemeIcons = {[size: string]: {
  [Name: string]: any,
}}