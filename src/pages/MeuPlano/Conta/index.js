import React from "react";

import { Header, ContaDoMes } from "../../../components";
import { PegarConta } from "../../../services/api";
import { Container, Titulo, PlanoID } from "./styles";

export default function Conta() {
  const Contas = PegarConta();

  return (
    <>
      <Header Numeral={2} />
      <Container showsVerticalScrollIndicator={false}>
        <Titulo>2° via de contas</Titulo>
        <PlanoID>{Contas.nome}</PlanoID>
        <ContaDoMes Preco="67,96" Vence="10/03/2020" Mes="fevereiro" />
        <ContaDoMes Preco="68,33" Vence="10/02/2020" Mes="janeiro" Vencida />
      </Container>
    </>
  );
}
