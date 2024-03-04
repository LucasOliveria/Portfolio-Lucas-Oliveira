import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IContextProps {
  arrow: string
  setArrow: Dispatch<SetStateAction<string>>
  exit: string
  setExit: Dispatch<SetStateAction<string>>
}

export const context = createContext({} as IContextProps);

function Context({ children }: { children: ReactNode }) {
  const [arrow, setArrow] = useState("none");
  const [exit, setExit] = useState("");

  return (
    <context.Provider value={
      {
        arrow,
        setArrow,
        exit,
        setExit
      }}
    >
      {children}
    </context.Provider>
  )
}

export default Context;