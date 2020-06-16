import React from 'react';
import { FooterWrapper, Text, FooterImg, ImageWrapper } from './styles';

const Footer = () => (
  <FooterWrapper>
    <Text>
      Esta aplicación web fue desarollada por Msc Luis Eduardo Muñoz Guerrero.
      Docente de planta en la Universidad Tecnológica de Pereira usando las
      siguientes tecnologías:
    </Text>
    <ImageWrapper>
      <FooterImg src={require('../../assets/img/react.png')} />
      <FooterImg src={require('../../assets/img/node.png')} />
    </ImageWrapper>
  </FooterWrapper>
);

export default Footer;
