"use client"

import React, { useState } from 'react';
import {
  MailOutlined,
  BookOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Contos', '1', <BookOutlined />, [
    getItem('Dense', '4'),
    getItem('Seita', '5'),
    getItem('Larva', '6'),
    getItem('Esther', '7'),
  ]),
  getItem('Contato', '2', <MailOutlined />),
  getItem('Me apoie', '3', <HeartOutlined />),
];

const SiderAntD: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
  );
};

export default SiderAntD;