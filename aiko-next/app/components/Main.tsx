import React from 'react';
import { Layout } from 'antd';
import CContent  from './main/CContent';
import CHeader from './main/CHeader';
import SiderAntD from './main/SiderAntD';
import CFooter from './main/CFooter';
import CFloatBtns from './main/CFloatBtns';

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderAntD />
        <Layout>
          {/* <CHeader /> */}
            <CContent />
          <CFooter />
        </Layout>
        <CFloatBtns />
    </Layout>
  );
};

export default App;