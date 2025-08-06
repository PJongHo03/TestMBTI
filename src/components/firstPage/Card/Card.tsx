import * as S from "./card-styled";
import type { CardProps } from "./types";

export default function Card({ bgColor, text, icon, iconColor }: CardProps) {
  return (
    <S.CardBackGround bgColor={bgColor}>
      <S.Icon iconColor={iconColor}>{icon}</S.Icon> {text}
    </S.CardBackGround>
  );
}
