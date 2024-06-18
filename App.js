import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import HomeScreen from './src/view/HomeScreen/Components';
import AdicionarDinheiro from './src/view/AdicionarDinheiro/Components';
import Saidas from './src/view/Saidas/Components';

export default function App() {

  const [changeScreen, setChangeScreen] = useState("AdicionarDinheiro")

  const CurrentScreen = () => {
    if (changeScreen === "HomeScreen") {
      return (
        <View>
          <HomeScreen/>
        </View>
      );
    } else if (changeScreen === "AdicionarDinheiro") {
      return (
        <View>
          <AdicionarDinheiro/>
        </View>
      );
    } else if (changeScreen === "Saidas") {
      return (
        <View>
          <Saidas/>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Teste</Text>
        </View>
      );
    }
  }

  return (
    <View>
      <CurrentScreen/>
    </View>
  );
}


