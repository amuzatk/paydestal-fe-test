import { StyledButton, StyledDiv, StyledFlex, StyledFlexItem, StyledHeroSection } from '@/__style/ui-block.style'
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import PossibityImage from '../../../public/assets/images/PossibilityImage.webp'
import FooterWebLogo from '../../../public/assets/images/logoFooterWeb.png'
import PossibilityIcon from '../../../public/assets/icons/check.png'
import LocationIcon from '../../../public/assets/icons/locationIcon.png'
import EmailIcon from '../../../public/assets/icons/emailIcon.png'
import TelephoneIcon from '../../../public/assets/icons/telephoneIcon.png'

import PossibilityI from '../../../public/assets/svg/background2.svg'
import InstagramIcon from '../../../public/assets/icons/InstagramSvg.svg'
import TwitterIcon from '../../../public/assets/icons/TwitterSvg.svg'
import FacebookIcon from '../../../public/assets/icons/facebookSvg.svg'


import { HeadingText, ParagraphText } from '@/__style/global.style'
import PossibilityItemized from '../possibilities/PossibilityItemized'
// import PossibilityItemized from './PossibilityItemized'


const Footer = () => {
  return (
    <StyledBackground>
    <StyledMainContainer>

        <StyledFirst>
          <Image src={FooterWebLogo} width={304.49} height={70} alt='FooterWebLogo'  />
          <ParagraphText>
          </ParagraphText>
        </StyledFirst>
        <StyledSecond></StyledSecond>
        <StyledThird></StyledThird>
        <StyledFourth></StyledFourth>



    </StyledMainContainer>
    </StyledBackground>
  )
}

export default Footer

const StyledBackground = styled.div`
/* position: relative; */
/* background-image: url('/assets/images/PossibilityBackground.webp'); */
background-image: url('/assets/images/footerBackground.png');
  /* background-size: cover; */
  background-size: contain;
  background-repeat: no-repeat;
  // Image: solutions-business-bgg;
/* background-image: url("solutions-business-bgg.png"); */

  /* background-position: center; */

  /* &:before {
    content: '';
    position: absolute;
    top: 100%; 
    left: 0;
    width: 100%;
    height: 200px;
    background-image: inherit;
    background-size: cover;
    background-position: center;
  } */

  @media only screen and (max-width: 991px) {
    background-image: none;
  }
`;
// const StyledMainContainer = styled(StyledHeroSection)`
const StyledMainContainer = styled.div`
/* position: relative; */
/* bottom: 130px; */
/* left: 70px; */
/* top: 0px; */
max-height: 702.24px;
max-width: 1428px;
display: flex;
  flex-wrap: wrap;
`;

const StyledFirst = styled(StyledDiv)`
border: 1px solid red;
flex-basis: 30%;
max-width: 436px;
height: 195px;
display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

`;
const StyledSecond = styled(StyledDiv)`
border: 1px solid green;
flex-basis: 20%;
max-width: 137px;
height: 195px;
display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;


`;
const StyledThird = styled(StyledDiv)`
border: 1px solid yellow;
flex-basis: 20%;
max-width: 187px;
height: 195px;
display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

`;
const StyledFourth = styled(StyledDiv)`
border: 1px solid red;
flex-basis: 30%;
max-width: 444px;
height: 195px;
flex-grow: 1;


`;
