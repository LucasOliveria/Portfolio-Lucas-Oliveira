import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IContextProps {
  test: string,
  setTest: Dispatch<SetStateAction<string>>
}

export const context = createContext({} as IContextProps);


function Context({ children }: { children: ReactNode }) {
  const [test, setTest] = useState("Teste");

  return (
    <context.Provider value={{ test, setTest }}>
      {children}
    </context.Provider>
  )
}

export default Context;