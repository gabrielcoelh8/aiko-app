import React from 'react';
import { Layout } from 'antd';
import CContent  from './main/CContent';
import CHeader from './main/CHeader';
import SiderAntD from './main/SiderAntD';
import CFooter from './main/CFooter';

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderAntD />
        <Layout>
          <CHeader />
            <CContent />
          <CFooter />
        </Layout>
    </Layout>
  );
};

export default App;