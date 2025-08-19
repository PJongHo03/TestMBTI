import styled from "styled-components";

export const Background = styled.div`
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

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: bolder;
  padding-bottom: 80px;
  color: #818181;
`;

export const AnswerButton = styled.button`
  border-radius: 10px;
  width: 180px;
  margin-top: 10px;
  height: 44px;
  color: #ffffff;
  border: none;
  font-size: 24px;
  font-weight: bolder;
  background: linear-gradient(to right, #8578f7, #3d9df6);

  &:hover {
    transform: scale(1.2);
    background: linear-gradient(to left, #8578f7, #3d9df6);
  }
`;

export const Question = styled.h1`
  padding-bottom: 80px;
`;
