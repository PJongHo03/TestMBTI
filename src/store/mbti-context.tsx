import { createContext, useEffect, useState, type ReactNode } from "react";

type MbtiProviderProps = {
  children: ReactNode;
};

type MbtiContextType = {
  checkedMBTI: string[];
  handleCheck: (value: string) => void;
};

export const ContextMBTI = createContext<MbtiContextType | null>(null);

export default function MbtiProvider({ children }: MbtiProviderProps) {
  const [checkedMBTI, setCheckedMBTI] = useState<string[]>([]);

  const handleCheck = (value: string) => {
    setCheckedMBTI((prev) => [...prev, value]);
  };

  useEffect(() => {
    console.log(checkedMBTI);
  }, [checkedMBTI]);

  return (
    <ContextMBTI.Provider value={{ checkedMBTI, handleCheck }}>
      {children}
    </ContextMBTI.Provider>
  );
}
