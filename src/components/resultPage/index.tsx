import { use, useContext } from "react";
import * as S from "./result-page-styled";
import { ContextMBTI } from "../../store/mbti-context";
import BrainIcon from "../../icon/BrainIcon";
import { mbti_Info } from "../../data";
import type { MBTI, mbtiInfo } from "../../data";
import { Brain } from "lucide-react";

export default function ResultPage() {
  const { mbtiResult } = useContext(ContextMBTI)!;

  const resultInfo: mbtiInfo = mbti_Info[mbtiResult as MBTI];

  const [resultInfoCode, resultInfoTitle, resultInfoMessage, resultColor] = [
    resultInfo.code,
    resultInfo.title,
    resultInfo.message,
    resultInfo.color,
  ];

  return (
    <>
      <S.Background>
        <BrainIcon width={60} height={60} icon={<Brain />} iconSize={40} />

        <S.Section>
          <S.ResultSection>
            <S.ResultSpan>
              <S.ResultCode color={resultInfo.color}>
                {resultInfoCode}
              </S.ResultCode>
              <S.ResultTitle color={resultInfo.color}>
                {resultInfoTitle}
              </S.ResultTitle>
            </S.ResultSpan>
            <S.ResultMessage>{resultInfoMessage}</S.ResultMessage>
          </S.ResultSection>

          <S.SectionGraph>
            <S.SectionTitle>성격 분석</S.SectionTitle>
          </S.SectionGraph>
        </S.Section>
      </S.Background>
    </>
  );
}
