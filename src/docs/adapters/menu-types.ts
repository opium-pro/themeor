export interface ItemProps {
  active?: boolean,
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
}

export interface WrapperProps {
  active?: boolean,
}

export interface GroupProps {
  title?: string,
  startNodeId?: any,
}

export interface SeparatorProps {}
export interface HintProps {}
export interface TitleProps {}