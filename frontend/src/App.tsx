import React from "react";
import ReactFlow from "react-flow-renderer";
import { Layout, Menu, Typography } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const elements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output", // output node
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3" },
];

const App = () => (
  <Layout>
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1">Input</Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header
        className="site-layout-background"
        style={{ paddingLeft: "0.5em", display: "flex", alignItems: "center" }}
      >
        <Title level={2} style={{ margin: 0 }}>
          Construct Event
        </Title>
      </Header>
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center", minHeight: '85vh', height: '100%' }}
        >
         <ReactFlow elements={elements} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created by Adnan Ahmic
      </Footer>
    </Layout>
  </Layout>
);

export default App;
