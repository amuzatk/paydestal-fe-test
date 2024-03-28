import { StyledButton, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import PaymentSection from '../../../public/assets/images/PaymentSectionImage.webp'
import RightArrow from '../../../public/assets/icons/RightArrow.png'
import { HeadingText, ParagraphText } from '@/__style/global.style'

const PaymentSolutions = () => {
  return (
    <StyledMainContainer>
      <StyledWrapper
      fDirection='row'
      justify='center'
      align='center'
      cg='126px'
      >
        <StyledRight
        grow
        >
      <Image 
      src={PaymentSection} 
      width={588} 
      height={565.96} 
      // width={516} 
      // height={436} 
      alt='PaymentSection'
      blurDataURL="/assets/images/PaymentSectionImage.webp"
        />
        </StyledRight>
        <StyledLeft
        grow
        // mWidth='731px'
        >
        <StyledHeading
    fsize='44px'
     fw='800'
     lh='55.44px'
     align='left'
     color='#1B442A'
     >
    Create tailored  payment 
solutions  using our thoroughly 
documented APIs 
     </StyledHeading>

     <StyledParagraph
     fw='400'
     fsize='20px'
    //  fsize='21px'
     lh='25.2px'
     textAlign='left'
    color='#000000'
    // background: #000000;
     >
    The in-depth and clear documentation of our APIs,  enables you to create,
from simple projects to intricate financial products catering to lots of customers. 
Got any ideas, it's time create.
     </StyledParagraph>

     <StyledGetStartedCont2>
<StyledGetStartedBtn>
Explore  our  API  
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
        
      </StyledWrapper>
    </StyledMainContainer>
  )
}

export default PaymentSolutions

const StyledMainContainer = styled(StyledHeroSection)`
max-height: 724.83px;
`;

const StyledWrapper = styled(StyledFlex)`
/* border: 1px solid red; */
@media only screen and (max-width:991px){
  flex-wrap: wrap;
}
`;


const StyledLeft = styled(StyledFlexItem)`
/* padding:10px 0; */
padding-bottom: 25px;
max-width: 731px;
// max-width: 731px;
/* border: 1px solid green; */
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
@media only screen and (max-width:768px){
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width:1367px){
 min-width: 750px;
}
`;

const StyledHeading = styled(HeadingText)`
     /* font-family: Plus Jakarta Sans;
font-size: 44px;
font-weight: 800;
line-height: 55.44px; */
text-align: left;
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
/* padding: 0 0px; */
// max-width: 765px;
// padding-right: 30px;
text-align: left;
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
/* border: 1px solid yellow; */
// min-width: 588px;
// height: 565.96;
min-width: 388px;
// min-height: 765.96px;


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
/* width: 189px; */
max-height: 60px;
padding: 16px 30px;
column-gap: 11px;
border-radius: 100px;
/* opacity: 0px; */
/* background-color: #1B442A; */
background-color: #1B442A;
max-width: 218px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: none;
margin-top: 49.65px;
@media only screen and (max-width:991px){
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
