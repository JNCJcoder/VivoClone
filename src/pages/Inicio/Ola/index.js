import React, { useEffect } from "react";

import { Container, Texto, SubTexto } from "./styles";

export default function Ola({ navigation: { navigate } }) {
  useEffect(() => {
    const Sleep = async () => {
      return new Promise(() =>
        setTimeout(() => {
          navigate("Rota");
        }, 3000),
      );
    };

    const Init = async () => {
      await Sleep();
    };

    Init();
  }, []);

  return (
    <Container>
      <Texto>Olá,</Texto>
      <SubTexto>Bem vindo.</SubTexto>
    </Container>
  );
}
