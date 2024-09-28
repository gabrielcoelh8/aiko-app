"use client"

import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const App: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
        Aiko ©{new Date().getFullYear()} Created by G. Coelho
    </Footer>
  );
};

export default App;