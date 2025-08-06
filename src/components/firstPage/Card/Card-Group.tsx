import { Heart, Send, Users, Webcam } from "lucide-react";
import Card from "./Card";
import * as S from "./card-styled";

const cardList = [
  {
    text: "외향 vs 내향",
    icon: <Send />,
    bgColor: "#9557fe",
    iconColor: "#ebdfff",
  },
  {
    text: "감각 vs 직관",
    icon: <Users />,
    bgColor: "#45A9FF",
    iconColor: "#D6ECFF",
  },
  {
    text: "사고 vs 감정",
    icon: <Heart />,
    bgColor: "#00A10A",
    iconColor: "#DEFDE0",
  },
  {
    text: "판단 vs 인식",
    icon: <Webcam />,
    bgColor: "#F68C00",
    iconColor: "#FFF2E1",
  },
];

export default function CardGroup() {
  return (
    <S.Section>
      {cardList.map((card, index) => (
        <Card
          key={index}
          text={card.text}
          icon={card.icon}
          bgColor={card.bgColor}
          iconColor={card.iconColor}
        />
      ))}
    </S.Section>
  );
}
