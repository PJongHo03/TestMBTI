import { use, useContext } from "react";
import * as S from "./result-page-styled";
import { ContextMBTI } from "../../store/mbti-context";
import BrainIcon from "../../icon/BrainIcon";
import { mbti_Info } from "../../data";
import type { MBTI, mbtiInfo } from "../../data";
import { Brain } from "lucide-react";
import ResultSection from "./resultSection/ResultSection";

export default function ResultPage() {
  const { mbtiResult } = useContext(ContextMBTI)!;

  const resultInfo: mbtiInfo = mbti_Info[mbtiResult as MBTI];

  return (
    <>
      <S.Background>
        <BrainIcon width={60} height={60} icon={<Brain />} iconSize={40} />
        <S.Section>
          <ResultSection />

          <S.SectionGraph>
            <S.SectionTitle>성격 분석</S.SectionTitle>
          </S.SectionGraph>
        </S.Section>
      </S.Background>
    </>
  );
}
