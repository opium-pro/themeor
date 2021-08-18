import { CommonComponent } from '../Common'

export type TaglessProps = {
  children?: any,
  FORCE_TAGLESS?: boolean,
  forwardRef?: any,
  id?: any,
}


export type TaglessComponent<Props = any> = CommonComponent<Props> & {
  TryTagless: CommonComponent<TaglessProps & Props>
}