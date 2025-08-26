import { use, useContext } from "react";
import * as S from "./result-page-styled";
import { ContextMBTI } from "../../store/mbti-context";

export default function ResultPage() {
  const { mbtiResult } = useContext(ContextMBTI);

  console.log(mbtiResult);
  return (
    <S.Background>
      <h1>결과</h1>
    </S.Background>
  );
}
