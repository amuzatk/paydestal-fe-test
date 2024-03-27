// import Image from "next/image";
// import styles from "./page.module.css";
// import { Button } from "antd";
// import { StyledDiv } from "@/__style/ui-block.style";
// import { HeadingText } from "@/__style/global.style";
// import styled from "styled-components";
// import { PaymentIcon } from "@/component/constants";
import Hero from "@/component/LandingPage/Hero";

export default function Home() {
  return (
    <div >
      <Hero />
      {/* <StyledP>Services</StyledP> */}
      {/* <StyledG>Why Paydestal</StyledG>
      <StyledDiv>
        <HeadingText
        color="red"
        fw="500"
        fsize="30px"
        >
          Kazmatics Welcome to Paydestal
          </HeadingText>
          <PaymentIcon />
      </StyledDiv>
  <Button type="primary">Button</Button> */}
    </div>
  );
}

// const StyledP = styled.p`
// font-size: 16px;
// font-weight: 400;
// line-height: 20.16px;
// text-align: center;
// `;

// const StyledG = styled.h1`
// /* font-family: Plus Jakarta Sans; */
// font-size: 16px;
// font-weight: 400;
// /* line-height: 20.16px; */
// text-align: center;

// `;