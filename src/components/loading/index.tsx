import Lottie from "lottie-react";
import LodingAnimation from "../../assets/Flow4.json";
import styled from "styled-components";

const Background = styled.div`
  background-color: #ffffff;
  width: 1000px;
  height: 500px;
  display: flex;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: center; // 가로 가운데
  align-items: center; // 세로 가운데
  flex-direction: column;
`;

export default function LoadingAni() {
  return (
    <Background>
      <Lottie
        animationData={LodingAnimation}
        loop={false}
        autoplay={true}
        style={{ width: 1000, height: 1000 }}
      />
    </Background>
  );
}
