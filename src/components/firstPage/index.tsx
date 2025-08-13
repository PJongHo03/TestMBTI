import * as S from "./first-page.styles";
import CardGroup from "./Card/Card-Group";

import StartButton from "./StartButton/Start-Button";
import BrainIcon from "../../icon/BrainIcon";
import { Brain } from "lucide-react";

export default function FirstPage() {
  return (
    <S.Background>
      <S.Header>
        <BrainIcon width={80} height={80} iconSize={45} icon={<Brain />} />
        <S.Title>간단한 MBTI 테스트</S.Title>
        <S.SubTitle>20개의 질문으로 당신의 성격 유형을 알아보세요</S.SubTitle>
      </S.Header>

      <S.Section>
        <CardGroup />
      </S.Section>

      <StartButton />
    </S.Background>
  );
}
