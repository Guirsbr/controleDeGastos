import { Pressable, Keyboard, View } from 'react-native';

import styles from './style';
import Title from './Tittle'
import CarteiraSaldos from './CarteiraSaldos';
import AdicionarValor from './AdicionarValor';
import Historico from './Historico';
import VoltarMenu from './VoltarMenu';

export default function AdicionarDinheiro(){
    return(
        <View style={styles.container}>
            <Pressable onPress={Keyboard.dismiss} style={styles.boxComponents}>
                <Title/>
                <CarteiraSaldos/>
                <AdicionarValor/>
                <Historico/>
                <VoltarMenu/>
            </Pressable>
        </View>
    );
};