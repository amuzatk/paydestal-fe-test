import { StyledDiv } from "@/__style/ui-block.style";
import Hero from "@/component/LandingPage/Hero";
import Faq from "@/component/LandingPage/faq";
import GetStarted from "@/component/LandingPage/getStarted";
import PaymentSolutions from "@/component/LandingPage/payments";
import EndlessPossibilities from "@/component/LandingPage/possibilities";
import SecureSection from "@/component/LandingPage/secure";

export default function Home() {
  return (
    <StyledDiv 
    oFlow="hidden"
    style={{
      overflowY:"hidden"
    }}
    >
      <Hero />
      <SecureSection />
      <EndlessPossibilities />
      <PaymentSolutions />
      <Faq />
      <GetStarted />

    </StyledDiv>
  );
}