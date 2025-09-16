import * as S from "./result-page-styled";
import BrainIcon from "../../icon/BrainIcon";
import { Brain } from "lucide-react";
import ResultSection from "./ResultSection";
import GraphSection from "./GraphSection";

export default function ResultPage() {
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
