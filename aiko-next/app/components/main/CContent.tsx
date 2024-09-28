"use client"

import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, theme } from 'antd';

const { Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];



const CContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div>
        </Content>
  );
};

export default CContent;