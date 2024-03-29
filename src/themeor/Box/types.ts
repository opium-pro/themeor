import { CommonProps } from '../Common'
import { TaglessComponent } from '../with-tagless'
import { obfuscate, hash } from '../config'

export const BOX_NAME = obfuscate ? hash('Box') : 'Box'

export type BoxProps = CommonProps & {
  fill?: string | false,
  strong?: boolean,
  inverse?: boolean,
  fancy?: boolean,
  borderFill?: string | false,
  borderWeight?: string | 'none' | false,
  borderRight?: string | 'none' | false,
  borderLeft?: string | 'none' | false,
  borderTop?: string | 'none' | false,
  borderBottom?: string | 'none' | false,
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