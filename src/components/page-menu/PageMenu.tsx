import React from "react";
import {Layout, Menu} from "antd";

const {Header} = Layout;

export const PageMenu = () => (
  <Header style={{zIndex: 1, width: "100%"}}>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">Home Page</Menu.Item>
    </Menu>
  </Header>
);
