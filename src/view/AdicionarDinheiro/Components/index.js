import { Pressable, Keyboard, View } from 'react-native';

import styles from './style';
import Title from './Tittle'
import AdicionarValor from './AdicionarValor';
import VoltarMenu from './VoltarMenu';

export default function AdicionarDinheiro(){
    return(
        <View style={styles.container}>
            <Pressable onPress={Keyboard.dismiss} style={styles.boxComponents}>
                <Title/>
                <AdicionarValor/>
                <VoltarMenu/>
            </Pressable>
        </View>
    );
};