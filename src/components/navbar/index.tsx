import React, { useState } from "react";
import { useSpring } from "react-spring";
import { Container, Logo, Navigation, Link, Home, Button } from "./style";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const opacity = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });
  const [active, setActive] = useState(!false);

  return (
    <Container style={opacity}>
      <Home href="/">
        <Logo />
      </Home>
      <Navigation active={active}>
        <Link href="/">Main</Link>
        <Link href="#Gallery">Gallery</Link>
        <Link href="#Projects">Projects</Link>
        <Link href="#Certificate">Certificates</Link>
        <Link href="#Contacts">Contacts</Link>
      </Navigation>
      <Button onClick={() => setActive(!active)}>
        <FaBars />
      </Button>
    </Container>
  );
};

export default Navbar;
