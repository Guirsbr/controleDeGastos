import { Pressable, Keyboard, View } from 'react-native';

import styles from './style';
import Title from './Tittle'
import CarteiraSaldos from './CarteiraSaldos';
import AdicionarSaida from './AdicionarSaida';
import Historico from './Historico';
import VoltarMenu from './VoltarMenu';

export default function Saidas(){
    return(
        <View style={styles.container}>
            <Pressable onPress={Keyboard.dismiss} style={styles.boxComponents}>
                <Title/>
                <CarteiraSaldos/>
                <AdicionarSaida/>
                <Historico/>
                <VoltarMenu/>
            </Pressable>
        </View>
    );
};