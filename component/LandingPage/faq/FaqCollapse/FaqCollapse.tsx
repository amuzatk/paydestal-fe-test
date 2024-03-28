import { Collapse } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState } from 'react';

const { Panel } = Collapse;

const FaqCollapse = () => {
  const [activeKey, setActiveKey] = useState<string[]>(['1']);

  const onChange = (keys: string | string[]) => {
    setActiveKey(typeof keys === 'string' ? [keys] : keys);
  };

  return (
    <div
    style={{
      padding:"10px",
    }}
    >
    <StyledCollapse
      accordion
      activeKey={activeKey}
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        isActive ? <MinusOutlined /> : <PlusOutlined />
      )}
      onChange={onChange}
    >
      <StyledPanel header="What is paydestal?" key="1">
        We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
      </StyledPanel>
      <StyledPanel header="Is it possible to integrate plugin?" key="2">
        We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
      </StyledPanel>
      <StyledPanel header="What services do you offer?" key="3">
        We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
      </StyledPanel>
      <StyledPanel header="Do you offer banking services?" key="4">
        We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
      </StyledPanel>
      <StyledPanel header="What do I need to get started?" key="5">
        We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
      </StyledPanel>
      <StyledPanel header="Where is Paydestal located?" key="6">
        We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
      </StyledPanel>
    </StyledCollapse>
    </div>
  );
};

export default FaqCollapse;

const StyledCollapse = styled(Collapse)`
  max-width:893px;
  margin: 0 auto;


  @media screen and (max-width: 768px) {
    max-width: 600px;
    padding: 0 15px;

  }
  @media screen and (max-width: 500px) {
    max-width: 500px;
    padding: 0 15px;
  }
`;

const StyledPanel = styled(Panel)`
  width: 100%;
  padding: 0 15px;
`;