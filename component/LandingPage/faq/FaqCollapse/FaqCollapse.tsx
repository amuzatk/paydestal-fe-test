// import { Collapse } from 'antd';
// import MinusIcon from '../../../../public/assets/icons/MinusIcon.svg';
// import PlusIcon from '../../../../public/assets/icons/PlusIcon.svg';

// import styled from 'styled-components';
// const { Panel } = Collapse;

// const text1 = `
// You get a refund when a vendor has confirmed that you have returned his order. Your funds are placed in your wallet. You can withdraw your funds to a bank account.
// `;
// const text2 = `
// Yes vendorstack collects certain fee such as tax, vat and payment gateway fees.
// `;
// const text3 = `
// You cannot return 1 item from your order at the moment. You’d need to return all items.
// `;
// const text4 = `
// Once you’ve paid for an order, you cannot amend it. But you can cancel the order before the vendor has accepted it and your money will be refunded.
// If you’d like to cancel after the order has been processed, please contact us.
// `;
// const text5 = `
// If you’re not satisfied with your order, you can return it. You would need to mark it as returned for it to be processed.
// `;
// const text6 = `
// If you’ve returned an order and the vendor has refused to confirm the return, please contact us.
// `;
// const text7 = `
// Please contact us if you’re having problems with withdrawing your balance.
// `;
// const text8 = `
// The Vendor determines when you receive your order. If the vendor does not accept your order in 24hrs your order will be cancelled and your funds refunded.
// `;
// const text9 = `
// For each order from a vendor, you can view and download a receipt.
// `;
// const text10 = `
// You cannot change an order address.
// `;
// const text11 = `
// If you’ve been debited already, please contact us and bring proof of purchase.
// `;
// const text12 = `
// To set up your vendor account, simply sign up with your email address and create a password. Then, follow the steps to create your business profile and start adding your products.
// `;
// const text13 = `
// After creating your vendor account, you can add your products by uploading product images, setting prices, and providing product descriptions. You can also categorize your products to make them easier to find for customers.
// `;
// const text14 = `
// The app provides various payment options for customers to pay for your products. Once the customer completes the payment, the app will hold the funds until the order is delivered, and then release the funds to your account.
// `;
// const text15 = `
// Yes, the app provides a dashboard for vendors to track their sales and orders. You can also view customer reviews, respond to customer inquiries, and manage your inventory.
// `;

// function CustomExpandIcon(props: { isActive: unknown }) {
//   const { isActive } = props;
//   const iconStyle = {
//     marginRight: 5,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 20,
//     height: 20,
//     borderRadius: '50%',
//     border: '1px solid var(--border-4)',
//   };
//   return <div style={iconStyle}>{isActive ? <MinusIcon /> : <PlusIcon />}</div>;
// }
// const FaqCollapse = () => {
//   return (
//     <>
//       <StyledCollapse>
//         <Collapse
//           defaultActiveKey={['1']}
//           ghost
//           className="no-border"
//           expandIconPosition="start"
//           expandIcon={({ isActive }) => (
//             <CustomExpandIcon isActive={isActive} />
//           )}
//         >
//           <Panel header="When do I get a refund?" key="1">
//             <p>{text1}</p>
//           </Panel>
//           <Panel header="Do we pay charges for refunds?" key="2">
//             <p>{text2}</p>
//           </Panel>
//           <Panel header="I want to return only 1 item." key="3">
//             <p>{text3}</p>
//           </Panel>
//           <Panel header="How do I amend my order?" key="4">
//             <p>{text4}</p>
//           </Panel>
//           <Panel header="I didn't get what I ordered" key="5">
//             <p>{text5}</p>
//           </Panel>
//           <Panel header="Vendor has not confirmed order return." key="6">
//             <p>{text6}</p>
//           </Panel>
//           <Panel header="I am unable to withdraw to my bank account" key="7">
//             <p>{text7}</p>
//           </Panel>
//           <Panel header="When do i get my order?" key="8">
//             <p>{text8}</p>
//           </Panel>
//           <Panel header="Can I view order receipt?" key="9">
//             <p>{text9}</p>
//           </Panel>
//           <Panel header="I want to change my order address" key="10">
//             <p>{text10}</p>
//           </Panel>
//           <Panel
//             header="I’ve been debited but my order is still pending"
//             key="11"
//           >
//             <p>{text11}</p>
//           </Panel>
//           <Panel
//             header="How do I set up my vendor account on the social commerce app?"
//             key="12"
//           >
//             <p>{text12}</p>
//           </Panel>
//           <Panel header=" How can I add my products to the app?" key="13">
//             <p>{text13}</p>
//           </Panel>
//           <Panel header="How do I receive payments from customers?" key="14">
//             <p>{text14}</p>
//           </Panel>
//           <Panel header="Can I track my sales and orders on the app?" key="15">
//             <p>{text15}</p>
//           </Panel>
//           {/* <Panel
//             header=" How do I sign up for an account on the social commerce app?"
//             key="16"
//           >
//             <p>{text16}</p>
//           </Panel> */}
//         </Collapse>
//       </StyledCollapse>
//     </>
//   );
// };

// export default FaqCollapse;

// const StyledCollapse = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 10rem;
//   .ant-collapse-header {
//     border-radius: 0 !important;
//     &-text {
//       font-style: normal;
//       font-weight: 600;
//       font-size: 18px;
//       /* color: 'var(--secondary-text_1)'; */
//       color: red;
//     }
//   }
//   .no-border .ant-collapse-content-box {
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 24px;
//     /* color: 'var(--secondary-text_3)'; */
//     color: red;
//     padding-left: 55px;
//     background-color: var(--faingrey);
//     border-radius: 10px;
//   }
// `;


// import { Collapse } from 'antd';
// import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// import styled from 'styled-components';
// import { useState } from 'react';

// const { Panel } = Collapse;

// const FaqCollapse = () => {
//   const [activeKey, setActiveKey] = useState<string[]>([]);

//   const onChange = (keys: string | string[]) => {
//     setActiveKey(typeof keys === 'string' ? [keys] : keys);
//   };

//   return (
//     <StyledCollapse
//       accordion
//       activeKey={activeKey}
//       expandIconPosition="end"
//       expandIcon={({ isActive }) => (
//         isActive ? <MinusOutlined /> : <PlusOutlined />
//       )}
//       onChange={onChange}
//     >
//       <Panel header="What is paydestal?" key="1">
//         We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.
//       </Panel>
//       <Panel header="Is it possible to integrate plugin?" key="2">
//         Content of panel 2
//       </Panel>
//       <Panel header="What services do you offer?" key="3">
//         Content of panel 3
//       </Panel>
//       <Panel header="Do you offer banking services?" key="4">
//         Content of panel 4
//       </Panel>
//       <Panel header="What do I need to get started?" key="5">
//         Content of panel 5
//       </Panel>
//       <Panel header="Where is Paydestal located?" key="6">
//         Content of panel 6
//       </Panel>
//     </StyledCollapse>
//   );
// };

// export default FaqCollapse;

// const StyledCollapse = styled(Collapse)`
//   max-width: 400px; // Adjust as needed
//   margin: 0 auto; // Center the accordion horizontally
// `;

import { Collapse } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState } from 'react';

const { Panel } = Collapse;

const FaqCollapse = () => {
  const [activeKey, setActiveKey] = useState<string[]>([]);

  const onChange = (keys: string | string[]) => {
    setActiveKey(typeof keys === 'string' ? [keys] : keys);
  };

  return (
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
        Content of panel 2
      </StyledPanel>
      <StyledPanel header="What services do you offer?" key="3">
        Content of panel 3
      </StyledPanel>
      <StyledPanel header="Do you offer banking services?" key="4">
        Content of panel 4
      </StyledPanel>
      <StyledPanel header="What do I need to get started?" key="5">
        Content of panel 5
      </StyledPanel>
      <StyledPanel header="Where is Paydestal located?" key="6">
        Content of panel 6
      </StyledPanel>
    </StyledCollapse>
  );
};

export default FaqCollapse;

const StyledCollapse = styled(Collapse)`
  /* max-width: 893px; */
  max-width: 600px;
  margin: 0 auto; // Center the collapse horizontally
`;

const StyledPanel = styled(Panel)`
  /* width: 893px; */
  width: 100%
`;
