
// /// WORKING
// import { Collapse } from 'antd';
// import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// import styled from 'styled-components';
// import { useState } from 'react';

// const { Panel } = Collapse;

// const FaqCollapse = () => {
//   const [activeKey, setActiveKey] = useState<string[]>(['1']);

//   const onChange = (keys: string | string[]) => {
//     setActiveKey(typeof keys === 'string' ? [keys] : keys);
//   };

//   return (
//     <div style={{ 
//       padding: '30px'

//        }}>
//       <StyledCollapse
//         accordion
//         activeKey={activeKey}
//         expandIconPosition="end"
//         expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
//         onChange={onChange}
//       >
//         <StyledPanel header="What is paydestal?" key="1">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="Is it possible to integrate plugin?" key="2">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="What services do you offer?" key="3">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="Do you offer banking services?" key="4">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="What do I need to get started?" key="5">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="Where is Paydestal located?" key="6">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//       </StyledCollapse>
//     </div>
//   );
// };

// export default FaqCollapse;

// const StyledCollapse = styled(Collapse)`
//   max-width: 893px;
//   margin: 0 auto;
//   border: none;
//   /* border-radius: 10px; */
//   overflow: hidden;

//   .ant-collapse-item {
//     /* border-bottom: 1px solid #f0f0f0; */
//     border-bottom: white;
//   }

//   .ant-collapse-item:last-child {
//     /* border-bottom: none; */
//     border-bottom: 1px solid #f0f0f0;
//   }

//   .ant-collapse-item:first-child {
//     /* border-bottom: none; */
//     border-bottom: 1px solid #f0f0f0;
//   }
// `;

// const StyledPanel = styled(Panel)`
//   padding: 15px;
//   /* border: none; */
//   border: 1px solid red;
//   border-radius: 0;
//   background-color: #fff;

//   .ant-collapse-header {
//     padding: 0;
//     border: none;
//     background-color: transparent;
//   }

//   .ant-collapse-content {
//     border: none;
//   }
// `;
// /////WORKING



// // import { Collapse } from 'antd';
// // import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// // import styled from 'styled-components';
// // import { useState } from 'react';

// // const { Panel } = Collapse;

// // const FaqCollapse = () => {
// //   const [activeKey, setActiveKey] = useState<string[]>(['1']);

// //   const onChange = (keys: string | string[]) => {
// //     setActiveKey(typeof keys === 'string' ? [keys] : keys);
// //   };

// //   return (
// //     <StyledContainer>
// //       <StyledCollapse
// //         accordion
// //         activeKey={activeKey}
// //         expandIconPosition="end"
// //         expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
// //         onChange={onChange}
// //       >
// //         <StyledPanel header="What is paydestal?" key="1">
// //           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
// //         </StyledPanel>
// //         <StyledPanel header="Is it possible to integrate plugin?" key="2">
// //           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
// //         </StyledPanel>
// //         <StyledPanel header="What services do you offer?" key="3">
// //           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
// //         </StyledPanel>
// //         <StyledPanel header="Do you offer banking services?" key="4">
// //           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
// //         </StyledPanel>
// //         <StyledPanel header="What do I need to get started?" key="5">
// //           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
// //         </StyledPanel>
// //         <StyledPanel header="Where is Paydestal located?" key="6">
// //           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
// //         </StyledPanel>
// //       </StyledCollapse>
// //     </StyledContainer>
// //   );
// // };

// // export default FaqCollapse;

// // const StyledContainer = styled.div`
// //   padding: 10px;
// // `;

// // const StyledCollapse = styled(Collapse)`
// //   max-width: 893px;
// //   margin: 0 auto;
// //   border-radius: 10px;
// //   overflow: hidden;

// //   .ant-collapse-item {
// //     border-bottom: 1px solid #f0f0f0;
// //   }

// //   .ant-collapse-item:last-child {
// //     border-bottom: none;
// //   }
// // `;

// // const StyledPanel = styled(Panel)`
// //   padding: 15px;
// //   border: none;
// //   border-radius: 0;
// //   background-color: #fff;

// //   .ant-collapse-header {
// //     padding: 0;
// //     border: none;
// //     background-color: transparent;
// //   }

// //   .ant-collapse-content {
// //     border: none;
// //   }
// // `;



/// WORKING
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
    <div style={{ 
      padding: '30px'

       }}>
      <StyledCollapse
        accordion
        activeKey={activeKey}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
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
  max-width: 893px;
  margin: 0 auto;
  border: none;
  /* border-radius: 10px; */
  overflow: hidden;

  .ant-collapse-item {
    /* border-bottom: 1px solid #f0f0f0; */
    border-bottom: white;
  }

  .ant-collapse-item:last-child {
    /* border-bottom: none; */
    /* border-bottom: 1px solid #f0f0f0; */
  }

  .ant-collapse-item:first-child {
    /* border-bottom: none; */
    border-bottom: 1px solid #f0f0f0;
  }
`;

const StyledPanel = styled(Panel)`
  padding: 15px;
  /* border: none; */
  /* border: 1px solid red; */
  border-radius: 0;
  background-color: #fff;

  .ant-collapse-header {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  .ant-collapse-content {
    border: none;
  }
`;
/////WORKING



// import { Collapse } from 'antd';
// import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// import styled from 'styled-components';
// import { useState } from 'react';

// const { Panel } = Collapse;

// const FaqCollapse = () => {
//   const [activeKey, setActiveKey] = useState<string[]>(['1']);

//   const onChange = (keys: string | string[]) => {
//     setActiveKey(typeof keys === 'string' ? [keys] : keys);
//   };

//   return (
//     <StyledContainer>
//       <StyledCollapse
//         accordion
//         activeKey={activeKey}
//         expandIconPosition="end"
//         expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
//         onChange={onChange}
//       >
//         <StyledPanel header="What is paydestal?" key="1">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="Is it possible to integrate plugin?" key="2">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="What services do you offer?" key="3">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="Do you offer banking services?" key="4">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="What do I need to get started?" key="5">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//         <StyledPanel header="Where is Paydestal located?" key="6">
//           We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//         </StyledPanel>
//       </StyledCollapse>
//     </StyledContainer>
//   );
// };

// export default FaqCollapse;

// const StyledContainer = styled.div`
//   padding: 10px;
// `;

// const StyledCollapse = styled(Collapse)`
//   max-width: 893px;
//   margin: 0 auto;
//   border-radius: 10px;
//   overflow: hidden;

//   .ant-collapse-item {
//     border-bottom: 1px solid #f0f0f0;
//   }

//   .ant-collapse-item:last-child {
//     border-bottom: none;
//   }
// `;

// const StyledPanel = styled(Panel)`
//   padding: 15px;
//   border: none;
//   border-radius: 0;
//   background-color: #fff;

//   .ant-collapse-header {
//     padding: 0;
//     border: none;
//     background-color: transparent;
//   }

//   .ant-collapse-content {
//     border: none;
//   }
// `;
