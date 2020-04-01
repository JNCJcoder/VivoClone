import React, { useEffect } from 'react';
import { TouchableOpacity, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { Perfil, Aura, Descubra, Suporte } from './pages';
import { Inicio, Login, SMS, TOS } from './pages/Inicio';
import { Consumo, Conta, Servicos } from './pages/MeuPlano';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function RotaInicial() {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Identifique-se',
            headerStyle: {
              backgroundColor: '#670099',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="SMS"
          component={SMS}
          options={{
            title: 'Verifique seu Número',
            headerStyle: {
              backgroundColor: '#670099',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="TOS"
          component={TOS}
          options={{
            title: 'Termos e condições',
            headerStyle: {
              backgroundColor: '#670099',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Rota"
          component={Routes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Meu Plano') {
            iconName = focused ? 'ios-stats' : 'ios-stats';
          } else if (route.name === 'Descubra') {
            iconName = focused ? 'md-eye' : 'md-eye';
          } else if (route.name === 'Aura') {
            iconName = focused ? 'ios-keypad' : 'ios-keypad';
          } else if (route.name === 'Suporte') {
            iconName = focused ? 'ios-construct' : 'ios-construct';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'ios-person' : 'ios-person';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#670099',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen name="Meu Plano" component={MeuPlano} />
      <Tab.Screen name="Descubra" component={Descubra} />
      <Tab.Screen name="Aura" component={Aura} />
      <Tab.Screen name="Suporte" component={Suporte} />
      <Tab.Screen name="Perfil" component={meuPerfil} />
    </Tab.Navigator>
  );
}

function MeuPlano() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Consumo"
        headerMode="float"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="Consumo"
          component={Consumo}
          options={{
            title: 'Meu Plano',
            headerLeft: null,
            headerStyle: { backgroundColor: '#670099' },
            headerTintColor: '#fff',
            headerRight: () => (
              // eslint-disable-next-line react-native/no-inline-styles
              <TouchableOpacity style={{ right: 15 }}>
                <Icon name="ios-refresh" size={30} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Conta"
          component={Conta}
          options={{
            title: 'Meu Plano',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#670099',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              // eslint-disable-next-line react-native/no-inline-styles
              <TouchableOpacity style={{ right: 15 }}>
                <Icon name="ios-refresh" size={30} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Servicos"
          component={Servicos}
          options={{
            title: 'Meu Plano',
            headerLeft: null,
            headerStyle: { backgroundColor: '#670099' },
            headerTintColor: '#fff',
            headerRight: () => (
              // eslint-disable-next-line react-native/no-inline-styles
              <TouchableOpacity style={{ right: 15 }}>
                <Icon name="ios-refresh" size={30} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
}

function meuPerfil() {
  return (
    <>
      <Stack.Navigator gestureEnabled={false}>
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            title: 'Perfil',
            headerLeft: null,
            gestureEnabled: false,
            headerStyle: { backgroundColor: '#670099' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </>
  );
}
