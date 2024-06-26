import { StyledButton, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import HeroImage from '../../../public/assets/images/HeroImage.webp'
import RightArrow from '../../../public/assets/icons/RightArrow.png'
import { HeadingText, ParagraphText } from '@/__style/global.style'

const Hero = () => {
  return (
    <StyledMainContainer>
      <StyledWrapper
      fDirection='row'
      justify='center'
      align='center'
      >
        <StyledLeft
        grow
        mWidth='731px'
        >
        <StyledHeading
    fsize='61px'
     fw='800'
     lh='88.2px'
     align='left'
     color='#1B442A'

     >
     The future of <StyledSpan>Payment </StyledSpan> Processing and Settlement 
     </StyledHeading>

     <StyledParagraph
     fw='400'
     fsize='17px'
     lh='25.2px'
     textAlign='left'
    color='#202020'
     >
     Revolutionizing financial transactions with a comprehensive suite of services 
ensuring seamless and secure payment solutions for diverse needs
     </StyledParagraph>

     <StyledGetStartedCont2>
<StyledGetStartedBtn>
  Get Started
</StyledGetStartedBtn>
<Image 
src={RightArrow} 
width={7} 
height={14} 
alt='RightArrow'
blurDataURL="/assets/icons/RightArrow.png"
 />
</StyledGetStartedCont2>
        </StyledLeft>
        <StyledRight
        grow
        >
      <Image 
      src={HeroImage} 
      width={588} 
      height={565.96} 
      alt='HeroImage'
      blurDataURL="/assets/images/HeroImage.webp"
        />
        </StyledRight>
      </StyledWrapper>
    </StyledMainContainer>
  )
}

export default Hero

const StyledMainContainer = styled(StyledHeroSection)`
max-height: 724.83px;
`;

const StyledWrapper = styled(StyledFlex)`
@media only screen and (max-width:991px){
  flex-wrap: wrap;
}
`;

const StyledSpan = styled.span`
color: #F4B23E;
`;

const StyledLeft = styled(StyledFlexItem)`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
/* border: 1px solid red; */
@media only screen and (max-width:768px){
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width:1367px){
 min-width: 750px;
}
`;

const StyledHeading = styled(HeadingText)`
@media only screen and (min-width:1367px){
font-size: 70px;
}
@media only screen and (max-width:991px){
  text-align: center;
}
@media only screen and (max-width:768px){
font-size: 34px;
line-height: 42.84px;
}
`;

const StyledParagraph = styled(ParagraphText)`
@media only screen and (min-width:1367px){
    font-size: 20px;
}
@media only screen and (max-width:991px){
  text-align: center;
}
@media only screen and (max-width:768px){
  text-align: center;
font-size: 16px;
line-height: 24px;
}
`;

const StyledRight = styled(StyledFlexItem)`
min-width: 588px;
height: 565.96;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media only screen and (max-width:991px){
  max-width: 731px;
}
@media only screen and (max-width: 768px){
  display: none;
}
`;

const StyledGetStartedCont2 = styled.button`
width: 189px;
max-height: 60px;
padding: 16px 30px;
column-gap: 11px;
border-radius: 100px;
opacity: 0px;
background-color: #1B442A;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: none;
margin-top: 49.65px;
@media only screen and (max-width:991px){
/* width: 189px; */
  width: 100%;
}
@media only screen and (max-width:768px){
width: 189px;
height: 56px;
padding: 14px 30px;
}
`;

const StyledGetStartedBtn = styled(StyledButton)`
max-height: 20px;
opacity: 0px;
color: #FFFFFF;
font-size: 16px;
font-weight: 400;
line-height: 20.16px;
text-align: left;
`;
