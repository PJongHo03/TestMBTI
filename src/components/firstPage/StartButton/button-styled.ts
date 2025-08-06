import styled from "styled-components";

export const StartButton = styled.button`
  width: 280px;
  height: 70px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center; // 세로 가운데
  justify-content: center; // 가로 가운데
  background: linear-gradient(to right, #8578f7, #3d9df6);

  &:hover {
    opacity: 0.92;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }
`;
