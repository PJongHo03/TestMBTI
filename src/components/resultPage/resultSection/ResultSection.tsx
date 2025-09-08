import { useContext } from "react";
import * as S from "../result-page-styled";
import { ContextMBTI } from "../../../store/mbti-context";
import { mbti_Info } from "../../../data";
import type { MBTI, mbtiInfo } from "../../../data";

export default function ResultSection() {
  const { mbtiResult } = useContext(ContextMBTI)!;

  const resultInfo: mbtiInfo = mbti_Info[mbtiResult as MBTI];

  const [
    resultInfoCode,
    resultInfoTitle,
    resultInfoMessage,
    resultColor,
    bestMbti,
    worstMbti,
  ] = [
    resultInfo.code,
    resultInfo.title,
    resultInfo.message,
    resultInfo.color,
    resultInfo.best,
    resultInfo.worst,
  ];

  console.log(resultInfo.bestMbti);
  return (
    <S.ResultSection>
      <S.ResultSpan>
        <S.ResultCode color={resultColor}>{resultInfoCode}</S.ResultCode>
        <S.ResultTitle color={resultColor}>{resultInfoTitle}</S.ResultTitle>
      </S.ResultSpan>
      <S.ResultMessage>{resultInfoMessage}</S.ResultMessage>
      <S.BestMbti>최고의 mbti 궁합 : {bestMbti}</S.BestMbti>
      <S.WorstMbti>최악의 mbti 궁합 : {worstMbti}</S.WorstMbti>

      <S.ReplayButton>다시 하기</S.ReplayButton>
    </S.ResultSection>
  );
}
