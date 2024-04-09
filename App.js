import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title'
import Functionalities from './src/components/Functionalities';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
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
