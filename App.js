import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import HomeScreen from './src/view/HomeScreen/Components';
import AdicionarDinheiro from './src/view/AdicionarDinheiro/Components';
import Saidas from './src/view/Saidas/Components';
import Extrato from './src/view/Extrato/Components';

export default function App() {

  const [changeScreen, setChangeScreen] = useState("HomeScreen")

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
    } else if (changeScreen === "Extrato") {
      return (
        <View>
          <Extrato/>
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


