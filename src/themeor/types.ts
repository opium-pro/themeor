import { BoxConfigProps } from './box/index.js'
import { FontConfigProps } from './font/index.js'
import { LineConfigProps } from './line/index.js'
import { IconConfigProps } from './icon/index.js'
import { FitConfigProps } from './fit/index.js'
import { GapConfigProps } from './gap/index.js'
import { ReactionConfigProps } from './reaction/index.js'


export type ConfigVar = { [name: string]: string }

export type ConfigComponent<ComponentProps = ConfigVar> = {
  [prop in keyof ComponentProps]?: { [varName: string]: ComponentProps[prop] }
}

export type ConfigurableComponents = 'box' | 'font' | 'fit' | 'line' | 'icon' | 'gap' | 'reaction'

export type ConfigFill = {
  fillFancy?: ConfigVar,
  fillInverse?: ConfigVar,
}


export type ThemeConfig = ConfigFill & {
  meta?: {
    name?: string,
    version?: string,
    contact?: string,
    description?: string,
    other?: any,
  },
  shallInverseOn?: string[],
  custom?: ConfigVar,
  fill?: ConfigVar,
  box?: ConfigFill & ConfigComponent<BoxConfigProps>,
  font?: ConfigFill & ConfigComponent<FontConfigProps>,
  line?: ConfigFill & ConfigComponent<LineConfigProps>,
  icon?: ConfigFill & ConfigComponent<IconConfigProps>,
  fit?: ConfigComponent<FitConfigProps>,
  gap?: ConfigComponent<GapConfigProps>,
  reaction?: ConfigFill & ConfigComponent<ReactionConfigProps>,
}

export type ThemeIcons = {
  [name: string]: any,
}