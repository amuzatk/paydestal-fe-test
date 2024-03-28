import Hero from "@/component/LandingPage/Hero";
import Faq from "@/component/LandingPage/faq";
import PaymentSolutions from "@/component/LandingPage/payments";
import EndlessPossibilities from "@/component/LandingPage/possibilities";
import SecureSection from "@/component/LandingPage/secure";

export default function Home() {
  return (
    <div 
    style={{
      overflowX:"hidden"
    }}
    >
      <Hero />
      <SecureSection />
      <EndlessPossibilities />
      <PaymentSolutions />
      <Faq />

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