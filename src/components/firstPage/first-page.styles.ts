import styled from "styled-components";

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  background: linear-gradient(to right, #a667f8, #3d9df6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  margin: 0px;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  color: #606977;
  margin: 0px;
`;

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
  justify-content: center; // 가로 가운데
  flex-direction: column;
  align-items: center; // 세로 가운데
  margin-bottom: 40px;
`;

export const Section = styled.section`
  margin-bottom: 44px;
`;

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
