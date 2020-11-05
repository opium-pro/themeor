import * as Types from '../config-types'

export type PureEffectProps = {
  transparency?: Types.Scale | 'none' | 'max',
  hidden?: boolean,
}

export type TaglessEffectProps = PureEffectProps & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
}

export type EffectProps = TaglessEffectProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_TAGLESS?: boolean,
  forwardRef?: any,
}