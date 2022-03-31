import React from 'react'

export type BoxContext = {
  TRY_TO_INVERSE?: boolean
}

export const BoxContext = React.createContext({} as BoxContext)
export const useBox = () => React.useContext(BoxContext)