"use client"

import React, { useState } from 'react';
import {
  AlignLeftOutlined,
  BoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Flex, FloatButton, Switch } from 'antd';

const BOX_SIZE = 160;

const BUTTON_SIZE = 40;

const style: React.CSSProperties = {
  position: 'fixed',
  insetInlineEnd: ((BOX_SIZE - BUTTON_SIZE) / 2),
  bottom: (BOX_SIZE - BUTTON_SIZE / 2),
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