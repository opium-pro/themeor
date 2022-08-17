import { CommonProps } from '../common/index.js'
import { TaglessComponent } from '../with-tagless/index.js'
import { componentName } from '../utils/component-name.js'

export const BOX_NAME = componentName('Box')

export type BoxConfigProps = {
  fill?: string | false,
  radius?: string | 'none' | 'max' | false | number,
  shadow?: string | 'none' | false | Object,
  glow?: string | 'none' | false | Object,
  blur?: string | 'none' | false | number,
  shadowInner?: string | 'none' | false | Object,
}

export type BoxProps = CommonProps & BoxConfigProps & {
  inverse?: boolean,
  fancy?: boolean,
  borderFill?: string | false,
  borderWeight?: string | 'none' | false | number,
  borderRight?: string | 'none' | false | number,
  borderLeft?: string | 'none' | false | number,
  borderTop?: string | 'none' | false | number,
  borderBottom?: string | 'none' | false | number,
  radiusTop?: string | 'none' | 'max' | false | number,
  radiusBottom?: string | 'none' | 'max' | false | number,
  radiusRight?: string | 'none' | 'max' | false | number,
  radiusLeft?: string | 'none' | 'max' | false | number,
  radiusTopLeft?: string | 'none' | 'max' | false | number,
  radiusTopRight?: string | 'none' | 'max' | false | number,
  radiusBottomRight?: string | 'none' | 'max' | false | number,
  radiusBottomLeft?: string | 'none' | 'max' | false | number,
  img?: string | false,
  noContext?: boolean,
}

export type BoxComponent = TaglessComponent<BoxProps>