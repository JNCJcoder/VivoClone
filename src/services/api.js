import React from "react";

import {
  GuardarSessaoAsync,
  RetornarSessaoAsync,
  GuardarNumero,
  RetornarNumero,
  GuardarNumeroFormatado,
  RetornarNumeroFormatado,
} from "./storage";

// FAKE API

const Cliente = {};
Cliente.plano = {};
Cliente.conta = {};

// Cliente
Cliente.nome = "Fulano da silva";
Cliente.numero = 0;
Cliente.numeroFormatado = "0";
Cliente.token = "00000";
Cliente.Sessao = "0";

// Plano
Cliente.plano.nome = "Internet Mensal - Vivo Controle I 4,5GB";
Cliente.plano.disponivel = "4,5Gb";
Cliente.plano.consumo = "0Gb";
Cliente.plano.renova = "26/03";

// Conta
Cliente.conta.nome = "VIVOCONTROLEDIGITAL_4,5GB ILIM_";
Cliente.conta.preco = "67,96";
Cliente.conta.vence = "10/03/2020";

export const AtualizarNumero = (NovoNumero) => {
  GuardarNumero(NovoNumero);
  Cliente.numero = NovoNumero;
};

export const PegarNumero = () => {
  if (Cliente.numero === 0) {
    Cliente.numero = RetornarNumero();
  }
  return Cliente.numero;
};

export const AtualizarNumeroFormatado = (NovoNumero) => {
  GuardarNumeroFormatado(NovoNumero);
  Cliente.numeroFormatado = NovoNumero;
};

export const PegarNumeroFormatado = () => {
  if (Cliente.numeroFormatado === "0") {
    Cliente.numeroFormatado = RetornarNumeroFormatado();
  }
  return Cliente.numeroFormatado;
};

export const PegarDDD = () => {
  return Cliente.numero.substring(0, 2);
};

export const PegarNome = () => {
  return Cliente.nome;
};

export const PegarToken = () => {
  return Cliente.token;
};

// Sessão

export const GerarSessao = async () => {
  Cliente.Sessao = "1";
  await GuardarSessaoAsync("1");
  return "1";
};

export const PegarSessao = (Session) => {
  Cliente.Sessao = Session;
};

export const RetornarSessao = async () => {
  const Session = await RetornarSessaoAsync();
  return (Cliente.Sessao = Session);
};

export const DeletarSessao = () => {
  Cliente.Sessao = "0";
  GuardarSessaoAsync("0");
  AtualizarNumero(0);
  AtualizarNumeroFormatado("0");
};

// Plano

export const PegarPlano = () => {
  return Cliente.plano;
};

// Conta
export const PegarConta = () => {
  return Cliente.conta;
};
