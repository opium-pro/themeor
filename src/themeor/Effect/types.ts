import * as Types from '../config-types'

export type PureEffectProps = {
  transparency?: string | Types.Scale | 'none' | 'max' | false,
  hidden?: boolean,
}

export type TaglessEffectProps = PureEffectProps & React.HTMLAttributes<HTMLDivElement> & {
  TRY_RECURSIVE_TAGLESS?: true,
  FORCE_TAGLESS?: true,
  children?: React.ReactNode,
  forwardRef?: any,
}

export type EffectProps = TaglessEffectProps & {
  TRY_TAGLESS?: boolean,
}