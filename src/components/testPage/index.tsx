import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { mbtiData } from "../../data";
import { ContextMBTI } from "../../store/mbti-context";
import BrainIcon from "../../icon/BrainIcon";
import { Brain } from "lucide-react";
import LoadingAni from "../loading";
import * as S from "./test-page-styled";

type score = {
  energy: number;
  information: number;
  decision: number;
  lifeStyle: number;
};

type key = "energy" | "information" | "decision" | "lifeStyle";

const letterToKey: Record<string, key> = {
  E: "energy",
  I: "energy",
  N: "information",
  S: "information",
  F: "decision",
  T: "decision",
  P: "lifeStyle",
  J: "lifeStyle",
};

const letterToValue: Record<string, number> = {
  E: +1,
  I: -1,
  N: +1,
  S: -1,
  F: +1,
  T: -1,
  P: +1,
  J: -1,
};

const TestPage: React.FC = () => {
  const { handleCheck, handleMbtiResult } = useContext(ContextMBTI)!;
  const [current, setCurrent] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [scores, setScores] = useState<score>({
    energy: 0,
    information: 0,
    decision: 0,
    lifeStyle: 0,
  });

  const { number } = useParams();
  const navigate = useNavigate();

  const q = mbtiData[current];

  useEffect(() => {
    if (number !== undefined) {
      setCurrent(Number(number));
    }
  }, [number, current, navigate]);

  const getMbtiString = (scores: score): string => {
    const { energy, information, decision, lifeStyle } = scores;

    const EorI = energy >= 0 ? "E" : "I";
    const NorS = information >= 0 ? "N" : "S";
    const ForT = decision >= 0 ? "F" : "T";
    const PorJ = lifeStyle >= 0 ? "P" : "J";

    return `${EorI}${NorS}${ForT}${PorJ}`;
  };

  const handleAnswerClick = (input: string) => {
    handleCheck(input);
    const key = letterToKey[input];
    const value = letterToValue[input];

    const nextScore = {
      ...scores,
      [key]: scores[key] + value,
    };

    setScores(nextScore);

    if (current >= 20) {
      handleMbtiResult(getMbtiString(scores));
      setLoading(true);
      setTimeout(() => {
        navigate(`/test/result`);
      }, 3000);
    } else {
      navigate(`/test/${current + 1}`);
    }
  };

  if (loading) return <LoadingAni />;

  return (
    <S.Background>
      <S.Header>
        <BrainIcon width={65} height={65} iconSize={35} icon={<Brain />} />
        {current + 1}/{mbtiData.length}
      </S.Header>
      <S.Question>{q.mbtiQuestion}</S.Question>
      <S.AnswerButton onClick={() => handleAnswerClick(q.yes)}>
        네
      </S.AnswerButton>
      <S.AnswerButton onClick={() => handleAnswerClick(q.no)}>
        아니요
      </S.AnswerButton>
    </S.Background>
  );
};

export default TestPage;
