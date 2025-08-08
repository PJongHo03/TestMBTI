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

export const AnswerButton = styled.button`
  border-radius: 10px;
  width: 200px;
  margin-top: 10px;
  height: 40px;
`;
