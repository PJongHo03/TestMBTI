import { createContext, useEffect, useState, type ReactNode } from "react";

type MbtiProviderProps = {
  children: ReactNode;
};

type MbtiContextType = {
  handleCheck: (value: string) => void;
  mbtiResult: string | null;
  handleMbtiResult: (value: string) => void;
};

export const ContextMBTI = createContext<MbtiContextType | null>(null);

export default function MbtiProvider({ children }: MbtiProviderProps) {
  const [checkedMBTI, setCheckedMBTI] = useState<string[]>([]);
  const [mbtiResult, setMbtiResult] = useState<string | null>(null);

  const handleCheck = (value: string) => {
    setCheckedMBTI((prev) => [...prev, value]);
  };

  const handleMbtiResult = (value: string) => {
    setMbtiResult(value);
  };

  // useEffect(() => {
  //   console.log(checkedMBTI);
  // }, [checkedMBTI]);

  return (
    <ContextMBTI.Provider value={{ handleCheck, handleMbtiResult, mbtiResult }}>
      {children}
    </ContextMBTI.Provider>
  );
}
