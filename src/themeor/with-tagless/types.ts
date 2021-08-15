import {FC} from 'react'

export type TryTaglessProps = {
  children?: any,
  TRY_RECURSIVE_TAGLESS?: boolean,
  FORCE_TAGLESS?: boolean,
  forwardRef?: any,
  [X: string]: any,
}


export type TryTagless<Props = TryTaglessProps> = FC<Props & TryTaglessProps>