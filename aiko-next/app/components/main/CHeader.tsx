"use client"

import React from 'react';
import { Layout, theme } from 'antd';

const { Header } = Layout;

const CHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
    </Header>
  );
};

export default CHeader;