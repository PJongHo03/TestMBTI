import { createContext, useState, type ReactNode } from "react";

export const ContextMBTI = createContext();

type MbtiProviderProps = {
  children: ReactNode;
};
export default function MbtiProvider({ children }: MbtiProviderProps) {
  const [checkedMBTI, setCheckedMBTI] = useState([]);
  return <ContextMBTI.Provider>{children}</ContextMBTI.Provider>;
}
