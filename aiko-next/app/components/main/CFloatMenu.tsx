"use client"

import React from 'react';
import {
  HeartOutlined,
  BookOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Flex, FloatButton } from 'antd';

const style: React.CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
};

const CFloatMenu: React.FC = () => {
  return (
    <Flex justify="space-evenly" align="center">
    <div> 
          {/* <Switch onChange={setOpen} checked={open} style={{ margin: 16 }} /> */}
          <FloatButton.Group
            key={"top"}
            trigger="click"
            placement={"top"}
            style={style}
            icon={<MenuOutlined />}
          >
            <FloatButton icon={<BookOutlined />} />
            <FloatButton icon={<HeartOutlined />} />
          </FloatButton.Group>
    </div>
  </Flex>
  );
};

export default CFloatMenu;