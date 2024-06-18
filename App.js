import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import HomeScreen from './src/view/HomeScreen';
import AdicionarDinheiro from './src/view/AdicionarDinheiro';

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


