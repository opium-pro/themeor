import { BoxConfigProps } from './Box'
import { FontConfigProps } from './Font'
import { LineConfigProps } from './Line'
import { IconConfigProps } from './Icon'
import { FitConfigProps } from './Fit'
import { GapConfigProps } from './Gap'
import { ReactionConfigProps } from './Reaction'


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