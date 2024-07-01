import { useState } from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigate from './src/view/HomeScreen/Components/Buttons/ButtonAdicionarDinheiro'

import HomeScreen from './src/view/HomeScreen/Components';
import AdicionarDinheiro from './src/view/AdicionarDinheiro/Components';
import Saidas from './src/view/Saidas/Components';
import Extrato from './src/view/Extrato/Components';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown:false
          }}
        />
         <Stack.Screen
          name="AdicionarDinheiro"
          component={AdicionarDinheiro}
          options={{
            headerShown:false
          }}
        />
         <Stack.Screen
          name="Saidas"
          component={Saidas}
          options={{
            headerShown:false
          }}
        />
         <Stack.Screen
          name="Extrato"
          component={Extrato}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )





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


