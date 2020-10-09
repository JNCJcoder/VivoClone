import React from 'react';
import { StatusBar } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Color from '../../config/Theme';
import Consumo from './Consumo/index.js';
import Conta from './Conta/index.js';
import Servicos from './Servicos/index.js';
import { Header, HeaderText } from './styles.js';

const Tab = createMaterialTopTabNavigator();

const MeuPlano = () => {
  return (
    <>
      <StatusBar backgroundColor={Color.primary} />
      <Header>
        <HeaderText>Meu Plano</HeaderText>
      </Header>
      <Tab.Navigator>
        <Tab.Screen name="Consumo" component={Consumo} />
        <Tab.Screen name="Conta" component={Conta} />
        <Tab.Screen name="Servicos" component={Servicos} />
      </Tab.Navigator>
    </>
  );
};

export default MeuPlano;
