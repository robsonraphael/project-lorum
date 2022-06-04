import styled from "styled-components";
import { animated } from "react-spring";
import SVG from "../../assets/Logo.svg";
import { MediaQuery } from "../../styles/mediaQuery";

interface Props {
  active: boolean;
}

export const Container = styled(animated.header)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  z-index: 99;

  height: 60px;
  padding: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  font-family: "Roboto";

  ${MediaQuery.Phone} {
    background-color: rgba(0, 255, 0, 0.5);
  }
  ${MediaQuery.Tablet_Port} {
    background-color: rgba(0, 255, 255, 0.5);
  }
  ${MediaQuery.Tablet_Land} {
    background-color: rgba(255, 1, 0, 0.5);
  }
  ${MediaQuery.Desktop} {
    background-color: rgba(255, 0, 255, 0.5);
  }
  ${MediaQuery.Large} {
    background-color: rgba(255, 255, 0, 0.5);
  }
`;
export const Logo = styled.img.attrs({
  src: SVG,
  alt: "logo",
})`
  width: 92xpx;
  height: 52px;

  position: relative;
  top: 3px;
  left: -10px;
`;
export const Navigation = styled.nav<Props>`
  display: flex;
  gap: 3rem;
  padding: 5px;

  ${MediaQuery.Phone} {
    display: ${(props) => (props.active ? "none" : "flex")};
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    gap: 0;
    padding: 0;

    position: absolute;
    top: 60px;
    left: 0%;

    height: calc(100vh - 60px);
    width: 100%;

    background-color: rgba(0, 0, 0, 0.3);
    a {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 5px;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

      font-weight: normal;
      width: 60%;
      height: 10%;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #101010;

      &:hover {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    animation: transform linear 0.4s;
    @keyframes transform {
      0% {
        transition: ease-in;
        transform: translateY(200px);
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
  ${MediaQuery.Tablet_Port} {
    animation: transform linear 0.25s;
    @keyframes transform {
      0% {
        transition: ease-in;
        transform: translateX(-100px);
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
    top: 62px;
    height: 40px;
    flex-direction: row;
    justify-content: space-evenly;

    background: none;

    a {
      text-transform: uppercase;
      font-size: 0.9em;
      width: fit-content;
      height: fit-content;

      font-weight: 300;

      box-shadow: none;
      background: none;

      border-radius: 1px;

      &:hover {
        color: #ccc;
        background: none;
        transition: ease 0.3s;
      }
    }
  }
  ${MediaQuery.Tablet_Land} {
    transition: ease-in-out 0.25s;
    position: static;
    display: flex;
    justify-content: space-between;
    width: 60%;

    a {
      background: none;
      font-size: 1em;
      font-weight: normal;
      text-transform: capitalize;
    }
  }
  ${MediaQuery.Desktop} {
    transition: ease-in-out 0.25s;
    width: 50%;
    a {
      padding: 5px;
    }
  }
`;
export const Home = styled.a``;
export const Link = styled(Home)`
  text-decoration: none;
  color: #101010;
  padding: 3px;
`;
export const Button = styled.button`
  display: none;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  font-size: 20px;
  color: #101010;
  background: none;
  border: none;

  cursor: pointer;

  &:hover {
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.1);
    transition: ease-in 0.3s;
  }
  &:active {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${MediaQuery.Phone} {
    display: flex;
  }
  ${MediaQuery.Tablet_Land} {
    display: none;
  }
`;
