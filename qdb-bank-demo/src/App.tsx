import React from "react";

import SideMenuBar from "./layouts/components/SideMenuBar/SideMenuBar";
import { HeadingBar } from "./layouts/components/HeadingBar/HeadingBar";
import { ContentPage } from "./layouts/components/ContentPage/ContentPage";
import { Layout, theme } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import CalendarPage from "./layouts/components/Calender/calender";
import SchedulerPage from "./layouts/components/Scheduler/SchedulerPage";
import LiveAlertPage from "./layouts/components/LiveAlertPage/LiveAlertPage";
import OverViewPage from "./layouts/components/OverViewPage/OverViewPage";
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
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <ContentPage />
            </Route>
            <Route path="/calender">
              <CalendarPage />
            </Route>
            <Route path="/scheduler">
              <SchedulerPage />
            </Route>
            <Route path="/livealert">
              <LiveAlertPage />
            </Route>
            <Route path="/overview">
              <OverViewPage />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
