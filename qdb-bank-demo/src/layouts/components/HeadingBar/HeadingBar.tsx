import React from "react";
import profilePic from "./../../../Images/krishnaIdPic.jpg";
import {
  AddButton,
  AlertSection,
  LeftSection,
  MainSection,
  NotificationSection,
  PictureSection,
  ProfileSection,
  RightSection,
} from "./styled.component";
import {
  SearchOutlined,
  BellOutlined,
  QrcodeOutlined,
  MailOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Input } from "antd";
export const HeadingBar = () => {
  return (
    <MainSection>
      <LeftSection>
        <Input
          size="large"
          placeholder="Type here to search..."
          prefix={<SearchOutlined />}
        />
      </LeftSection>
      <RightSection>
        <AddButton>
          <Button type="text">+Add</Button>
        </AddButton>
        <AlertSection>
          <BellOutlined />
        </AlertSection>
        <NotificationSection>
          <Badge count={3} size={"small"}>
            <MailOutlined />
          </Badge>
        </NotificationSection>
        <ProfileSection>
          <Badge count={5} size={"small"}>
            <QrcodeOutlined />
          </Badge>
        </ProfileSection>
        <PictureSection>
          {" "}
          <Avatar size={32} icon={<UserOutlined />} src={profilePic} />
          <CaretDownOutlined style={{ color: "grey" }} />
        </PictureSection>
      </RightSection>
    </MainSection>
  );
};
