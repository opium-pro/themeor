import { CommonProps } from '../Common'
import { TaglessComponent } from '../with-tagless'
import { componentName } from '../utils/component-name'

export const BOX_NAME = componentName('Box')

export type BoxConfigProps = {
  fill?: string | false,
  radius?: string | 'none' | 'max' | false | number,
  shadow?: string | 'none' | false,
  glow?: string | 'none' | false,
  blur?: string | 'none' | false,
  shadowInner?: string | 'none' | false,
}

export type BoxProps = CommonProps & BoxConfigProps & {
  inverse?: boolean,
  fancy?: boolean,
  borderFill?: string | false,
  borderWeight?: string | 'none' | false,
  borderRight?: string | 'none' | false,
  borderLeft?: string | 'none' | false,
  borderTop?: string | 'none' | false,
  borderBottom?: string | 'none' | false,
  radiusTop?: string | 'none' | 'max' | false,
  radiusBottom?: string | 'none' | 'max' | false,
  radiusRight?: string | 'none' | 'max' | false,
  radiusLeft?: string | 'none' | 'max' | false,
  radiusTopLeft?: string | 'none' | 'max' | false,
  radiusTopRight?: string | 'none' | 'max' | false,
  radiusBottomRight?: string | 'none' | 'max' | false,
  radiusBottomLeft?: string | 'none' | 'max' | false,
  img?: string | false,
  noContext?: boolean,
}

export type BoxComponent = TaglessComponent<BoxProps>