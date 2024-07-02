import { Pressable, Keyboard, View } from 'react-native';

import styles from './style';
import Title from './Tittle'
import AdicionarSaida from './AdicionarSaida';
import VoltarMenu from './VoltarMenu';

export default function Saidas(){
    return(
        <View style={styles.container}>
            <Pressable onPress={Keyboard.dismiss} style={styles.boxComponents}>
                <Title/>
                <AdicionarSaida/>
                <VoltarMenu/>
            </Pressable>
        </View>
    );
};