import { StyledButton, StyledContainer, StyledDiv, StyledFlex, StyledFlexItem } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import HeroImage from '../../../public/assets/images/HeroImage.webp'
import RightArrow from '../../../public/assets/icons/RightArrow.png'
import { HeadingText, ParagraphText } from '@/__style/global.style'

const Hero = () => {
  return (
    <StyledMainContainer>
      <StyledFlex
      fDirection='row'
      // justify='space-evenly'
      justify='center'
      align='center'
      >
        <StyledLeft>

        <HeadingText
    //  fsize='70px'
    fsize='70px'
     fw='800'
     lh='88.2px'
     align='left'
     color='#1B442A'
    //  spacing="0.02em"

     >
 {/* <StyledSpan>Payment </StyledSpan>   */}

     The future of <StyledSpan>Payment </StyledSpan> Processing and Settlement 
     </HeadingText>
     {/* <HeadingText
    //  fsize='70px'
    fsize='60px'
     fw='800'
     lh='88.2px'
     align='left'
     color='#1B442A'
     >
     The future of  
 <StyledSpan>Payment </StyledSpan>  Processing
and Settlement 
     </HeadingText> */}

     <ParagraphText
     fw='400'
     fsize='20px'
     lh='25.2px'
    //  alignItems='left'
     textAlign='left'
    //  pr='30px'
     >
     Revolutionizing financial transactions with a comprehensive suite of services 
ensuring seamless and secure payment solutions for diverse needs
     </ParagraphText>

     <StyledGetStartedCont2>
<StyledGetStartedBtn>
  Get Started
</StyledGetStartedBtn>
<Image src={RightArrow} width={7} height={14} alt='RightArrow' />
</StyledGetStartedCont2>

{/* <ParagraphText
     fw='400'
     fsize='20px'
     lh='25.2px'
    //  alignItems='left'
     textAlign='left'
    //  pr='30px'
     >
     Revolutionizing financial transactions with a comprehensive suite of services 
ensuring seamless and secure payment solutions for diverse needs
     </ParagraphText> */}

     {/* <StyledGetStartedCont2>
<StyledGetStartedBtn>
  Get Started
</StyledGetStartedBtn>
<Image src={RightArrow} width={7} height={14} alt='RightArrow' />
</StyledGetStartedCont2> */}

     {/* <ParagraphText
     fw='400'
     fsize='20px'
     lh='25.2px'
    //  alignItems='left'
     textAlign='left'
    //  pr='30px'
     >
     Revolutionizing financial transactions with a comprehensive suite of services 
ensuring seamless and secure payment solutions for diverse needs
     </ParagraphText> */}
        </StyledLeft>
        <StyledRight>
      <Image src={HeroImage} width={588} height={565.96} alt='HeroImage'  />
      {/* <Image src={HeroImage} width={288} height={265.96} alt='HeroImage'  /> */}
        </StyledRight>
      </StyledFlex>
    </StyledMainContainer>
  )
}

export default Hero
// const StyledMainContainer = styled(StyledContainer)`
// /* border: 1px solid red; */
// max-height: 724.83px;
// `;
const StyledMainContainer = styled.div`
/* border: 1px solid red; */
max-height: 724.83px;
/* padding: 10px 30px; */
/* margin: 0px 40px; */
/* @media only screen and (max-width:1366px){
  border: 1px solid yellow;
  max-width: 800px;
} */

 @media (min-width: 1200px) {
  /* border: 1px solid yellow; */
    max-width: 1303px;
    margin: auto;
  }
`;
const StyledSpan = styled.span`
color: #F4B23E;
`;
const StyledLeft = styled(StyledFlexItem)`
/* border: 1px solid red; */
/* align-self: flex-start; */
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
/* flex: 1; */
/* row-gap: 26px; */
/* gap: 26px; */



/* width: 731px; */
max-width: 731px;
/* height: 449.22px; */
/* top: 146.95px;
left: 194px; */
/* gap: 0px; */
/* border-radius: 100px 0px 0px 0px; */
/* opacity: 0px; */

`;
const StyledRight = styled(StyledFlexItem)`
/* flex: 1; */
/* border: 1px solid green; */
/* max-width: 588px; */
min-width: 588px;
/* width: 588px; */
width: auto;
height: 565.96;

img{
  width: 100%;
  height: 100%;
}
`;
const StyledGetStartedCont = styled(StyledDiv)`
width: 189px;
height: 60px;
padding: 16px 30px;
column-gap: 11px;
border-radius: 100px;
opacity: 0px;
background-color: #1B442A;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

// const StyledGetStartedCont2 = styled(ParagraphText)`
const StyledGetStartedCont2 = styled.button`
width: 189px;
height: 60px;
padding: 16px 30px;
column-gap: 11px;
border-radius: 100px;
opacity: 0px;
/* background-color: #231b44; */
background-color: #1B442A;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

border: none;

margin-top: 49.65px;
`;
const StyledGetStartedBtn = styled(StyledButton)`
/* width: 90px; */
height: 20px;
/* gap: 0px; */
opacity: 0px;
color: #FFFFFF;
font-size: 16px;
font-weight: 400;
line-height: 20.16px;
text-align: left;
`;
