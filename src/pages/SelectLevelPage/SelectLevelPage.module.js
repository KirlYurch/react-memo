import styled, { keyframes } from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalDiv = styled.div`
  width: 480px;
  height: 459px;
  border-radius: 12px;
  background: #c2f5ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContentForm = styled.form`
  width: 480px;
  height: 459px;
  background-color: #c2f5ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
export const TitleH1 = styled.h1`
  color: #004980;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 45px;
  margin-top: 25px;
`;

export const Label = styled.label`
  background: #fff;
  height: 98px;
  width: 98px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0080c1;
  font-size: 64px;
  font-weight: 400;
  transition: all 0.2s ease;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  &:hover {
    box-shadow: 0 0 0 3px #0080c1;
    cursor: pointer;
  }
`;

export const ChooseDifContainerDiv = styled.div`
  display: flex;
  gap: 24px;
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + ${Label} {
    background: #0080c1;
    color: #ffffff;
  }
`;

const rotateAnimation = keyframes`
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
  
  10% {
    transform: rotate(8deg);
  }
  
  20%,
  40%,
  60% {
    transform: rotate(-10deg);
  }
  
  30%,
  50%,
  70% {
    transform: rotate(10deg);
  }
  
  80% {
    transform: rotate(-8deg);
  }
  
  90% {
    transform: rotate(8deg);
  }
`;

export const MainContentGoButton = styled.button`
  margin-top: 40px;
  width: 246px;
  height: 50px;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  background-color: #7ac100;
  border: none;
  border-radius: 12px;
  transition: all 0.25s;
  animation: ${rotateAnimation} 1.5s cubic-bezier(0, 0, 0, 0) 7s 1 normal
    backwards;
  &:hover {
    scale: 1.05;
    background-color: #e26060;
  }
`;

export const LabelEasy = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const P1Easy = styled.p`
  color: #004980;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
`;

export const SwitchEasy = styled.div`
  position: relative;
  width: 19px;
  height: 7px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 9.33px;
    height: 9px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const InputEasy = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchEasy} {
    background: #7ac100;

    &:before {
      transform: translate(10.67px, -50%);
    }
  }
`;
