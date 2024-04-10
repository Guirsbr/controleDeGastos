import { View } from 'react-native';
import styles from './style';

import Title from '../Title'
import Components from './Components';

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Title/>
            <Components/>
        </View>
    );
};