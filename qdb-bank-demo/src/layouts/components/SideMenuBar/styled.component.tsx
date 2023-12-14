import styled from "styled-components";
export const UpperHeadSection = styled.div`
  //width: 256px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
`;
export const HeadingSection = styled.div`
  //width: 256px;
  display: flex;
  height: 64px;
  flex-direction: row;
  background: #1677ff;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`;
export const BankLogoSection = styled.img`
  height: 29px;
  width: 100px;
`;
export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  //width: 256px;
  margin: 24px 0px;
`;
export const PicSection = styled.div`
  order: 1;
  width: fit-content;
  align-self: center;
`;
export const HelloSection = styled.div`
  order: 2;
  width: fit-content;
  align-self: center;
  weight: 400;
  font-size: 13px;
`;
export const NameSection = styled.div`
  order: 3;
  width: fit-content;
  align-self: center;
  weight: 600;
  font-size: 16px;
`;
export const ButtonSection = styled.div`
  order: 4;
  width: fit-content;
  align-self: center;
  margin-top: 4px;
`;
