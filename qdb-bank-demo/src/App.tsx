import React from "react";

import SideMenuBar from "./layouts/components/SideMenuBar/SideMenuBar";
import { HeadingBar } from "./layouts/components/HeadingBar/HeadingBar";
import { ContentPage } from "./layouts/components/ContentPage/ContentPage";
import { Layout, theme } from "antd";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} style={{ background: colorBgContainer }}>
        <SideMenuBar />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <HeadingBar />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <ContentPage />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
