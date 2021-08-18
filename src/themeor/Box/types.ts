import { CommonProps } from '../Common'
import { TaglessComponent } from '../with-tagless'

export const BOX_NAME = 'Box'

export type BoxProps = CommonProps & {
  fill?: string | false,
  strong?: boolean,
  inverse?: boolean,
  fancy?: boolean,
  borderFill?: string | false,
  borderWeight?: string | 'none' | false,
  radius?: string | 'none' | 'max' | false,
  radiusTop?: string | 'none' | 'max' | false,
  radiusBottom?: string | 'none' | 'max' | false,
  radiusRight?: string | 'none' | 'max' | false,
  radiusLeft?: string | 'none' | 'max' | false,
  radiusTopLeft?: string | 'none' | 'max' | false,
  radiusTopRight?: string | 'none' | 'max' | false,
  radiusBottomRight?: string | 'none' | 'max' | false,
  radiusBottomLeft?: string | 'none' | 'max' | false,
  shadow?: string | 'none' | false,
  shadowInner?: string | 'none' | false,
  glow?: string | 'none' | false,
  img?: string | false,
  noContext?: boolean,
  blur?: string | 'none' | false,
}

export type BoxComponent = TaglessComponent<BoxProps>