import React, { useState } from "react";
import logo from "./../../../Images/QDBBankLogo.png";
import profilePic from "./../../../Images/krishnaIdPic.jpg";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SignalFilled,
  CalendarOutlined,
  SendOutlined,
  BellOutlined,
  ExclamationCircleOutlined,
  MessageOutlined,
  CopyOutlined,
  SnippetsOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  RiseOutlined,
  FallOutlined,
  PieChartOutlined,
  FundOutlined,
  LineChartOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Menu } from "antd";
import {
  BankLogoSection,
  ButtonSection,
  HeadingSection,
  HelloSection,
  NameSection,
  PicSection,
  ProfileSection,
  UpperHeadSection,
} from "./styled.component";
import { useFetch } from "../../../Hooks/useCallApi";
import { useHistory } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const data1 = {
  id: 2,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
};
const items: MenuProps["items"] = [
  getItem("Dashboards", "sub1", null, [
    getItem("Overview", "g1", <SignalFilled />),
    getItem("Calendar", "g2", <CalendarOutlined />),
    getItem("Schedule Actions", "g3", <SendOutlined />),
    getItem("Live Alerts", "g4", <BellOutlined />),
  ]),
  { type: "divider" },
  getItem("Blogs", "sub2", null, [
    getItem("All", "g11", <MessageOutlined />),
    getItem("Latest", "g21", <ExclamationCircleOutlined />),
    getItem("Archived", "g31", <CalendarOutlined />),
  ]),

  { type: "divider" },

  getItem("Documentation", "sub3", null, [
    getItem("Customer Files", "g41", <CopyOutlined />),
    getItem("Client Files", "g51", <SnippetsOutlined />),
  ]),
  { type: "divider" },

  getItem("Reports", "sub4", null, [
    getItem("Investment Report", "g52", <PieChartOutlined />),
    getItem("Loan Report", "g61", <LineChartOutlined />),
    getItem("Loss Report", "g71", <FallOutlined />),
    getItem("Profit Report", "g81", <RiseOutlined />),
  ]),
  { type: "divider" },

  getItem("Need Help?", "sub5", null, [
    getItem("Contact Details", "g17", <PhoneOutlined />),
    getItem("Address Book", "g27", <EnvironmentOutlined />),
  ]),
  { type: "divider" },
];

const SideMenuBar: React.FC = () => {
  const history = useHistory();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    if (e.key === "g2") {
      history.push("/calender");
    }
    if (e.key === "g1") {
      history.push("/overview");
    }
    if (e.key === "g3") {
      history.push("/scheduler");
    }
    if (e.key === "g4") {
      history.push("/livealert");
    }
    if (e.key === "g11" || e.key === "g21" || e.key === "g31") {
      history.push("/home", { data: e.key });
    }
  };
  const [collapsed, setCollapsed] = useState(false);
const envUrl = process.env.REACT_APP_API_ENDPOINT_USER;
const url = envUrl || "https://jsonplaceholder.typicode.com/users/1";
  const { data } = useFetch(url, data1);

  return (
    <UpperHeadSection>
      <HeadingSection>
        <BankLogoSection src={logo} alt="logo"></BankLogoSection>
        <div>
          <Button
            type="primary"
            onClick={() => setCollapsed(!collapsed)}
            style={{ marginBottom: 16 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
      </HeadingSection>
      <ProfileSection>
        <PicSection>
          <Avatar size={64} icon={<UserOutlined />} src={profilePic} />
        </PicSection>
        <HelloSection>Hello</HelloSection>
        <NameSection>
          {data.name}
          <CaretDownOutlined style={{ color: "grey" }} />
        </NameSection>
        <ButtonSection>
          <Button type="primary">
            <FundOutlined />
            Live Metrics
          </Button>
        </ButtonSection>
      </ProfileSection>
      <Menu
        onClick={onClick}
        //style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </UpperHeadSection>
  );
};

export default SideMenuBar;
