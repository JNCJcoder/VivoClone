import React from 'react';

import { Container, Titulo, Description, IconButton, Iconic } from './styles';

export default function Login({ navigation }) {
  navigation.setOptions({
    headerLeft: () => (
      <IconButton onPress={() => navigation.goBack()}>
        <Iconic name="md-close" size={30} />
      </IconButton>
    ),
  });

  return (
    <>
      <Container>
        <Titulo>TERMOS DE USO E POLITICA DE PRIVACIDADE</Titulo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          lobortis ornare eros, vel blandit orci porta sit amet. Maecenas libero
          quam, eleifend non elit ut, elementum ultricies sem. Vivamus
          tristique, dolor ut faucibus vulputate, sem justo bibendum ipsum, ac
          malesuada libero ipsum in lectus.
        </Description>

        <Titulo>I. DAS DEFINIÇÕES:</Titulo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          lobortis ornare eros, vel blandit orci porta sit amet. Maecenas libero
          quam, eleifend non elit ut, elementum ultricies sem. Vivamus
          tristique, dolor ut faucibus vulputate, sem justo bibendum ipsum, ac
          malesuada libero ipsum in lectus.
        </Description>

        <Titulo>II. DAS CONDIÇÕES GERAIS DO SERVIÇO:</Titulo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          lobortis ornare eros, vel blandit orci porta sit amet. Maecenas libero
          quam, eleifend non elit ut, elementum ultricies sem. Vivamus
          tristique, dolor ut faucibus vulputate, sem justo bibendum ipsum, ac
          malesuada libero ipsum in lectus.
        </Description>
        <Titulo>III. DO CADASTRO:</Titulo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          lobortis ornare eros, vel blandit orci porta sit amet. Maecenas libero
          quam, eleifend non elit ut, elementum ultricies sem. Vivamus
          tristique, dolor ut faucibus vulputate, sem justo bibendum ipsum, ac
          malesuada libero ipsum in lectus.
        </Description>

        <Titulo>(...)</Titulo>
      </Container>
    </>
  );
}
