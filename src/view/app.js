import { StyleSheet, Text, View } from 'react-native';
import Title from './src/view/Title'
import Functionalities from './src/view/Functionalities';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Text></Text>
      <Functionalities/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#524938',
    paddingTop:60,
  },
});
