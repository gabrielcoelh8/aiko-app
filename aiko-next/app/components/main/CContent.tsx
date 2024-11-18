"use client";

import conto_example from "@/app/utils/conto_example.json";
import React from "react";
import { Layout, theme, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const CContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        style={{
          marginInline: 100,
          padding: 24,
          minHeight: 360,
          maxWidth: 1080,
        }}
      >
        <Typography>
          <Title level={2}>Dense</Title>
          {conto_example.content.map((paragrafo: string, index: number) => (
            <Paragraph key={index} style={{ fontFamily: "bookerly", fontSize: 19 }}>
              {paragrafo}
            </Paragraph>
          ))}
        </Typography>
      </div>
    </Content>
  );
};

export default CContent;
