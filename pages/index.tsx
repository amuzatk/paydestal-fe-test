import Hero from "@/component/LandingPage/Hero";
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