import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IContextProps {
  test: string
  setTest: Dispatch<SetStateAction<string>>
  arrow: string
  setArrow: Dispatch<SetStateAction<string>>
}

export const context = createContext({} as IContextProps);

function Context({ children }: { children: ReactNode }) {
  const [test, setTest] = useState("Teste");
  const [arrow, setArrow] = useState("none");

  return (
    <context.Provider value={
      {
        test,
        setTest,
        arrow,
        setArrow
      }}
    >
      {children}
    </context.Provider>
  )
}

export default Context;