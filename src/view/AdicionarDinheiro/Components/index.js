import { Pressable, Keyboard } from 'react-native';

import styles from './style';
import Title from './Tittle'
import CarteiraSaldos from './CarteiraSaldos';
import AdicionarValor from './AdicionarValor';
import Historico from './Historico';
import VoltarMenu from './VoltarMenu';

export default function Components(){
    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.boxComponents}>
            <Title/>
            <CarteiraSaldos/>
            <AdicionarValor/>
            <Historico/>
            <VoltarMenu/>
        </Pressable>
    );
};