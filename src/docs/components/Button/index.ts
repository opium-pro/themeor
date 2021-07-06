import {FC} from 'react'
import {default as Button, ButtonProps} from './Regular'
import {default as Primary, ButtonProps as PrimaryButtonProps} from './Primary'

export interface IButton extends FC<ButtonProps> {
  Primary: FC<PrimaryButtonProps>
}

(Button as IButton).Primary = Primary

export default Button as IButton