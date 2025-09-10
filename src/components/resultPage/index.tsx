import { use, useContext } from "react";
import * as S from "./result-page-styled";
import { ContextMBTI } from "../../store/mbti-context";
import BrainIcon from "../../icon/BrainIcon";
import { mbti_Info } from "../../data";
import type { MBTI, mbtiInfo } from "../../data";
import { Brain } from "lucide-react";
import ResultSection from "./ResultSection";
import GraphSection from "./GraphSection";

export default function ResultPage() {
  const { mbtiResult } = useContext(ContextMBTI)!;

  const resultInfo: mbtiInfo = mbti_Info[mbtiResult as MBTI];

  return (
    <>
      <S.Background>
        <BrainIcon width={60} height={60} icon={<Brain />} iconSize={40} />
        <S.Section>
          <ResultSection />
          <GraphSection />
        </S.Section>
      </S.Background>
    </>
  );
}
