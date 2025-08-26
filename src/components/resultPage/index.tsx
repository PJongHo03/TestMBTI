import { use, useContext } from "react";
import * as S from "./result-page-styled";
import { ContextMBTI } from "../../store/mbti-context";

export default function ResultPage() {
  const { mbtiResult } = useContext(ContextMBTI);

  const getMbtiString = (scores: number[]): string => {
    const { energy, information, decision, lifeStyle } = scores;

    const EorI = energy >= 0 ? "E" : "I";
    const NorS = information >= 0 ? "N" : "S";
    const ForT = decision >= 0 ? "F" : "T";
    const PorJ = lifeStyle >= 0 ? "P" : "J";

    return `${EorI}${NorS}${ForT}${PorJ}`;
  };

  const result = getMbtiString(mbtiResult);
  return (
    <S.Background>
      <h1>{result}</h1>
    </S.Background>
  );
}
