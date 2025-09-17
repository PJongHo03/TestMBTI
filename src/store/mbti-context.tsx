import { createContext, useEffect, useState, type ReactNode } from "react";

type MbtiProviderProps = {
  children: ReactNode;
};

type MbtiContextType = {
  handleCheck: (value: string) => void;
  mbtiResult: string | null;
  mbtiScores: score | null;
  handleMbtiResult: (value: string) => void;
  handleMbtiScores: (value: score) => void;
};

type score = {
  energy: number;
  information: number;
  decision: number;
  lifeStyle: number;
};

export const ContextMBTI = createContext<MbtiContextType | null>(null);

export default function MbtiProvider({ children }: MbtiProviderProps) {
  const [checkedMBTI, setCheckedMBTI] = useState<string[]>([]);
  const [mbtiResult, setMbtiResult] = useState<string | null>(null);

  const [mbtiScores, setMbtiScores] = useState<score>({
    energy: 0,
    information: 0,
    decision: 0,
    lifeStyle: 0,
  });

  const handleCheck = (value: string) => {
    setCheckedMBTI((prev) => [...prev, value]);
  };

  const handleMbtiResult = (value: string) => {
    setMbtiResult(value);
  };

  const handleMbtiScores = (value: score) => {
    setMbtiScores(value);
  };

  return (
    <ContextMBTI.Provider
      value={{
        handleCheck,
        handleMbtiResult,
        mbtiResult,
        handleMbtiScores,
        mbtiScores,
      }}
    >
      {children}
    </ContextMBTI.Provider>
  );
}
