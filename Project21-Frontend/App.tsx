import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ApolloProvider } from "@apollo/client";
import client from "./src/Apollo/apolloClient";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    SplineSans: require("./assets/fonts/SplineSans-VariableFont_wght.ttf"),
    LexendDeca: require("./assets/fonts/LexendDeca-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}
