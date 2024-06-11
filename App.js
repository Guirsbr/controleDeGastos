import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import HomeScreen from './src/view/HomeScreen';

export default function App() {

  const [changeScreen, setChangeScreen] = useState("HomeScreen")

  const CurrentScreen = () => {
    if (changeScreen === "HomeScreen") {
      return (
        <View>
          <HomeScreen/>
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


