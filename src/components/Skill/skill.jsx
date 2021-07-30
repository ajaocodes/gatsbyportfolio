import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skill = () => {
  const { skill } = useContext(PortfolioContext);
  const {paragraphOne} = skill;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  
  return (
    <section id="skill">
      <Container> 
         <div>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="100px">
        <Title title="SKILLS" />
          <p> {paragraphOne || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'} </p>
            </Fade>
          </div>
      </Container>
    </section>
  );
};

export default Skill;