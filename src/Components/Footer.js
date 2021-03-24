import React from "react";
import styled from "styled-components";
import logo from "../Images/Frame.svg";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <img src={logo} alt="logo" />
        <div>
          <RiInstagramFill size={25} style={{ margin: "5px" }} />
          <IoLogoTwitter size={25} style={{ margin: "5px" }} />
          <ImFacebook size={25} style={{ margin: "5px" }} />
        </div>
        <p>1 ROYAL SKY RESORT, CALIFORNIA, CA 98765, UNITED STATES</p>
        <p>(123) 456 - 7890</p>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterContainer = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 80%;
  }
  p {
    text-align: center;
    font-weight: 900;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    img {
      width: 50%;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    img {
      width: 40%;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    img {
      width: 30%;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    img {
      width: 20%;
    }
  }
`;
