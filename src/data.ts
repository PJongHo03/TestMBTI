export type MBTI =
  | "INFP"
  | "INTP"
  | "INFJ"
  | "INTJ"
  | "ENFP"
  | "ENTP"
  | "ENFJ"
  | "ENTJ"
  | "ISFP"
  | "ISTP"
  | "ISFJ"
  | "ISTJ"
  | "ESFP"
  | "ESTP"
  | "ESFJ"
  | "ESTJ";

type MbtiQuestionType = {
  mbtiQuestion: string;
  yes: string;
  no: string;
};

type mbtiInfo = {
  code: string;
  title: string;
  message: string;
  color: string;
  best: string;
  worst: string;
};

export const mbtiData: MbtiQuestionType[] = [
  {
    mbtiQuestion: "여러사람이랑 대화하는 것을 즐긴다.",
    yes: "E",
    no: "I",
  },
  {
    mbtiQuestion: "다른 사람들과 함께 하는 활동을 좋아하는 편이다.",
    yes: "E",
    no: "I",
  },
  { mbtiQuestion: "새로운 사람을 만나는 것을 쉽게 한다", yes: "E", no: "I" },

  {
    mbtiQuestion: "계획 없이 즉흥적으로 일을 처리하는 것을 좋아한다.",
    yes: "S",
    no: "N",
  },
  {
    mbtiQuestion: "차분하고 조용한 분위기에서 일하는 것을 좋아한다",
    yes: "S",
    no: "N",
  },
  {
    mbtiQuestion: "언제나 새로운 아이디어나 가능성을 찾고 시도해본다.",
    yes: "T",
    no: "F",
  },
  { mbtiQuestion: "친한 사람들과 논다면 오랫동안 논다", yes: "F", no: "T" },
  {
    mbtiQuestion: "자신이 원하는 것을 이루기 위해 앞장서는 것을 꺼리지 않는다.",
    yes: "J",
    no: "P",
  },
  {
    mbtiQuestion: "독자적으로 일하는 것보다 팀으로 일하는 것을 좋아한다",
    yes: "P",
    no: "J",
  },
  {
    mbtiQuestion: "혼자 있을 때 생각에 잠겨 있는 시간이 좋다.",
    yes: "I",
    no: "E",
  },
  {
    mbtiQuestion: "새로운 경험이나 활동을 시도해 보는 것을 좋아한다.",
    yes: "S",
    no: "N",
  },
  {
    mbtiQuestion: "자신의 의견을 명확하게 말하는 것을 좋아한다.",
    yes: "T",
    no: "F",
  },
  {
    mbtiQuestion: "기억력이 좋아서 과거의 사건들을 세세히 기억한다.",
    yes: "S",
    no: "N",
  },
  {
    mbtiQuestion: "타인의 기분을 민감하게 살핀다.",
    yes: "F",
    no: "T",
  },
  {
    mbtiQuestion: "불확실한 상황에서도 창의적인 해결책을 찾아낸다.",
    yes: "N",
    no: "S",
  },
  {
    mbtiQuestion: "책이나 영화를 통해 감정을 깊이 느낄 수 있다.",
    yes: "F",
    no: "T",
  },
  {
    mbtiQuestion: "다른 사람들과의 대화에서 감정적인 표현을 자주 사용한다.",
    yes: "T",
    no: "F",
  },
  {
    mbtiQuestion: "상상력이 풍부하고 창의적인 아이디어를 많이 내놓는다.",
    yes: "N",
    no: "S",
  },
  {
    mbtiQuestion: "결정하기 전에 모든 가능성을 고려하는 것을 좋아한다.",
    yes: "P",
    no: "J",
  },
  {
    mbtiQuestion: "여러 가지 일을 한꺼번에 처리하는 것을 좋아한다.",
    yes: "P",
    no: "J",
  },
  {
    mbtiQuestion: "다양한 사람들과 교류하고 새로운 경험을 쌓는 것을 좋아한다.",
    yes: "E",
    no: "I",
  },
];

export const mbti_Info: Record<MBTI, mbtiInfo> = {
  INFP: {
    code: "INFP",
    title: "잔다르크형",
    message: "이상적인 세상을 만들어가는 사람들",
    color: "#F3D6B6",
    best : "ENFJ, ENTJ",
    worst : "ESTJ, ESTP"
  },
  INTP: {
    code: "INTP",
    title: "아이디어형",
    message: "비평적인 관점을 가진 뛰어난 전략가",
    color: "#E7C7DE",
    best : "ENTJ, ENFJ",
    worst : "ESFJ, ESTJ"
  },
  INFJ: {
    code: "INFJ",
    title: "예언자형",
    message: "사람에 관한 뛰어난 통찰력을 가진사람",
    color: "#F9D4CC",
    best :"ENFP, ENTP",
    worst : "ESTP, ESFP"
  },
  INTJ: {
    code: "INTJ",
    title: "과학자형",
    message: "전체를 조합하여 비전을 제시하는 사람",
    color: "#E7F0D3",
    best:"ENFP, ENTP",
    worst: "ESFP, ESTP"
  },
  ENFP: {
    code: "ENFP",
    title: "스파크형",
    message: "열정적으로 새 관계를 만드는 사람",
    color: "#FCEEC9",
    best:"INFJ, INTJ",
    worst:"ISTJ, ISFJ"
  },
  ENTP: {
    code: "ENTP",
    title: "발명가형",
    message: "풍부한 상상력으로 새로운 것에 도전",
    color: "#C5DEE3",
    best:"INFJ, INTJ",
    worst: "ISFJ, ISTJ"
  },
  ENFJ: {
    code: "ENFJ",
    title: "언변능숙형",
    message: "타인의 성장을 도모하고 협동하는 사람",
    color: "#C9D2E1",
    best:"INFP, INTP",
    worst: "ISTP, ESTP"
  },
  ENTJ: {
    code: "ENTJ",
    title: "지도자형",
    message: "비전을 갖고 타인을 활력적으로 인도",
    color: "#F2CAB0",
    best:"INTP, INFP",
    worst: "ISFP, ESFP"
  },
  ISFP: {
    code: "ISFP",
    title: "성인군자형",
    message: "따듯한 감성을 가지고 있는 겸손한 사람",
    color: "#EDB7B7",
    best:"ESFJ, ENFJ",
    worst: "ENTJ, ESTJ"
  },
  ISTP: {
    code: "ISTP",
    title: "백과사전형",
    message: "논리적이고 뛰어난 상황 적응력",
    color: "#E1D8E9",
    best:"ESTJ, ENTJ",
    worst: "ENFJ, ESFJ"
  },
  ISFJ: {
    code: "ISFJ",
    title: "권력형",
    message: "성실하고 온화하며 협조를 잘하는 사람",
    color: "#BCE2E3",
    best:"ESFP, ESTP",
    worst: "ENTP, ENFP"
  },
  ISTJ: {
    code: "ISTJ",
    title: "소금형",
    message: "한번 시작한 일은 끝까지 해내는 성격",
    color: "#E2E4D7",
    best:"ESTP, ESFP",
    worst: "ENFP, ENTP"
  },
  ESFP: {
    code: "ESFP",
    title: "사교형",
    message: "분위기를 고조시키는 우호적인 성격",
    color: "#C9E5CF",
    best:"ISFJ, ISTJ",
    worst: "INTJ, INFJ"
  },
  ESTP: {
    code: "ESTP",
    title: "활동가형",
    message: "친구, 운동, 음식 등 다양함을 선호",
    color: "#C6E5F9",
    best:"ISTJ, ISFJ",
    worst: "INFJ, INTJ"
  },
  ESFJ: {
    code: "ESFJ",
    title: "친선도모형",
    message: "친절,현실감을 바탕으로 타인에게 봉사",
    color: "#F6C1D3",
    best:"ISFP, INFP",
    worst: "INTP, ISTP"
  },
  ESTJ: {
    code: "ESTJ",
    title: "사업가형",
    message: "사무적, 실용적, 현실적인 스타일",
    color: "#F0F3C6",
    best:"ISTP, INTP",
    worst: "INFP, ISFP"
  },
};
