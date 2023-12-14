import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  padding: 0px 8px;
`;
export const LeftSection = styled.div`
  order: 1;
  width: 25vw;
`;
export const RightSection = styled.div`
  order: 2;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const AddButton = styled.div`
  order: 1;
`;
export const AlertSection = styled.div`
  order: 2;
`;
export const NotificationSection = styled.div`
  order: 3;
`;
export const ProfileSection = styled.div`
  order: 4;
`;
export const PictureSection = styled.div`
  order: 5;
  margin-right: 10px;
`;
