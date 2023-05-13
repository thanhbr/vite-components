import {createContext, useContext, useReducer} from "react";
import {GlobalInitState, GlobalReducer} from "./GlobalReducer";

const GlobalContext = createContext()

export const GlobalStore = ({children}) => {
  const [state, dispatch] = useReducer(GlobalReducer, GlobalInitState)
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)
export default useGlobalContext;

