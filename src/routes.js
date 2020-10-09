import React, { useEffect } from "react";
import { TouchableOpacity, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Color from "./config/Theme";
import { Perfil, Aura, Descubra, Suporte } from "./pages";
import { Inicio, Login, SMS, TOS, Ola } from "./pages/Inicio";
import MeuPlano from "./pages/MeuPlano";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function RotaInicial() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        headerMode="float"
        screenOptions={{
          headerStyle: {
            backgroundColor: Color.primary,
          },
          headerTintColor: Color.secondary,
        }}>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Identifique-se",
          }}
        />
        <Stack.Screen
          name="SMS"
          component={SMS}
          options={{
            title: "Verifique seu Número",
          }}
        />
        <Stack.Screen
          name="TOS"
          component={TOS}
          options={{
            title: "Termos e condições",
          }}
        />
        <Stack.Screen
          name="Ola"
          component={Ola}
          options={{ headerShown: false }}
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

          switch (route.name) {
            case "Meu Plano":
              iconName = focused ? "ios-stats" : "ios-stats";
              break;
            case "Descubra":
              iconName = focused ? "md-eye" : "md-eye";
              break;
            case "Aura":
              iconName = focused ? "ios-keypad" : "ios-keypad";
              break;
            case "Suporte":
              iconName = focused ? "ios-construct" : "ios-construct";
              break;
            case "Perfil":
              iconName = focused ? "ios-person" : "ios-person";
              break;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.primary,
        inactiveTintColor: "gray",
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

function meuPerfil() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            title: "Perfil",
            headerLeft: null,
            gestureEnabled: false,
            headerStyle: { backgroundColor: Color.primary },
            headerTintColor: Color.secondary,
          }}
        />
      </Stack.Navigator>
    </>
  );
}
