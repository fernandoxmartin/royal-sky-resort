import React from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../Images/Frame.svg";
import { Link } from "react-router-dom";

const Header = ({ isOpen, setOpen }) => {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <NavLinks>
          <Link to="/stay">Stay</Link>
          <Link to="/dine">Dine</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/reserve">Reserve</Link>
        </NavLinks>
        <NavButton>
          <Hamburger size={30} color="#000" toggled={isOpen} toggle={setOpen} />
        </NavButton>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderInnerContainer = styled.div`
  height: 7.5vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 80%;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    img {
      height: 20%;
    }
  }
`;
const NavLinks = styled.nav`
  display: none;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: #000;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bolder;
      letter-spacing: 1px;
      &:nth-last-child(1) {
        background: ${({ theme }) => theme.colors.primary};
        height: 50px;
        width: 150px;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    width: 40%;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    width: 30%;
  }
`;
const NavButton = styled.div`
  z-index: 10;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    display: none;
  }
`;

export default Header;
