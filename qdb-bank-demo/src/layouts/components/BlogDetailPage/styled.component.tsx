import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  gap: 10px;
  margin: 10px;
`;
export const LeftMainSection = styled.div`
  order: 1;
  width: 120px;
  height: 100px;
`;
export const RightMainSection = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
export const MainHeadingSection = styled.div`
  order: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const LeftHeadingSection = styled.div`
  order: 1;
  font-size: 16px;
  font-weight: 500;
`;
export const RightHeadingSection = styled.div`
  order: 2;
`;
export const TextSection = styled.div`
  order: 2;
  font-size: 12px;
  font-weight: 300;
`;
export const ReadMoreSection = styled.div`
  order: 3;
`;
export const PaginationSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
