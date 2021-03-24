import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = ({ isOpen, setOpen }) => {
  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <NavWrapper isOpen={isOpen}>
      <NavContainer>
        <Link to="/" onClick={() => setOpen(!isOpen)}>
          Home
        </Link>
        <Link to="/stay" onClick={() => setOpen(!isOpen)}>
          Stay
        </Link>
        <Link to="/dine" onClick={() => setOpen(!isOpen)}>
          Dine
        </Link>
        <Link to="/experience" onClick={() => setOpen(!isOpen)}>
          Experience
        </Link>
        <Link to="/reserve" onClick={() => setOpen(!isOpen)}>
          Reserve
        </Link>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.alternate};
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: 0.3s ease-in-out;
  z-index: 5;
`;
const NavContainer = styled.nav`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  a {
    width: 100%;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    font-size: 5rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    :nth-last-child(1) {
      text-align: center;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
