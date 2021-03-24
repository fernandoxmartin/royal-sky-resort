import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts.primary}
    }
`;
export const Hero = styled.div`
  width: 100%;
  height: 50vh;
  background: ${(props) => `url(${props.img})}`};
  background-size: cover;
  background-position: center center;
`;
export const FeatureContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 50% 50%;
  align-items: center;
  margin-bottom: 50px;
  background: ${({ theme }) => theme.colors.primary};
  :nth-child(even) {
    background: ${({ theme }) => theme.colors.alternate};
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    grid-template-rows: none;
    display: flex;
    height: 40vh;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    height: 50vh;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    height: 60vh;
    margin-bottom: 70px;
  }
`;
export const FeatureImage = styled.div`
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const FeatureDetails = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    width: 60%;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    width: 35%;
  }
`;
export const DetailContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    font-size: ${({ theme }) => theme.sizes.h2};
    text-transform: uppercase;
  }
  p {
    font-size: ${({ theme }) => theme.sizes.p};
    margin: 20px 0px 20px 0px;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    height: 80%;
    h2 {
      font-size: calc(${({ theme }) => theme.sizes.h2} * 1.5);
    }
    p {
      font-size: calc(${({ theme }) => theme.sizes.p} * 1.2);
    }
  }
`;
export const FeatureButton = styled.div`
  height: 50px;
  width: 100%;
  background: ${({ theme }) => theme.colors.buttonSecondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.sizes.h2};
  color: ${({ theme }) => theme.colors.buttonText};
  text-transform: uppercase;
  letter-spacing: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Tag = styled.div`
  height: 35vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  h1 {
    font-size: ${({ theme }) => theme.sizes.h1};
    font-family: ${({ theme }) => theme.fonts.secondary};
    line-height: ${({ theme }) => theme.sizes.h1};
    letter-spacing: 1px;
  }
  h3 {
    font-size: ${({ theme }) => theme.sizes.h3};
    letter-spacing: 1px;
    font-weight: 500;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    height: 30vh;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    height: 40vh;
    h1 {
      font-size: calc(${({ theme }) => theme.sizes.h1} * 1.5);
    }
    h3 {
      font-size: calc(${({ theme }) => theme.sizes.h3} * 1.2);
    }
  }
`;
