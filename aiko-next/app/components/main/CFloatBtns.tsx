"use client"

import React, { useState } from 'react';
import {
  AlignLeftOutlined,
  BoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Flex, FloatButton, Switch } from 'antd';

const style: React.CSSProperties = {
  position: 'fixed',
  right: 16,
  bottom: 16,
};

const CFloatBtns: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Flex justify="space-evenly" align="center">
    <div> 
          {/* <Switch onChange={setOpen} checked={open} style={{ margin: 16 }} /> */}
          <FloatButton.Group
            open={open}
            key={"top"}
            trigger="click"
            placement={"top"}
            style={style}
            icon={<SettingOutlined />}
          >
            <FloatButton icon={<BoldOutlined />} />
            <FloatButton icon={<AlignLeftOutlined />} />
          </FloatButton.Group>
        )
    </div>
  </Flex>
  );
};

export default CFloatBtns;