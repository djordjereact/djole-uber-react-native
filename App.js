import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import NavOptions from "./components/NavOptions";

export default function App() {
  return (
      <Provider store={store}>
          <View>
              <HomeScreen />
              <NavOptions />
          </View>
      </Provider>

  );
}
