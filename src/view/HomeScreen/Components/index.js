import { View } from 'react-native';

import styles from './style';
import Title from './Title'
import CarteiraSaldos from './CarteiraSaldos';
import ButtonAdicionarDinheiro from './Buttons/ButtonAdicionarDinheiro';
import ButtonSaidas from './Buttons/ButtonSaidas';
import ButtonExtrato from './Buttons/ButtonsExtrato';
import ButtonSugestaoInvestimentos from './Buttons/ButtonSugestaoInvestimentos';

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Title/>
            <View style={styles.boxComponents}>
                <CarteiraSaldos/>
                <ButtonAdicionarDinheiro/>
                <ButtonSaidas/>
                <ButtonExtrato/>
                <ButtonSugestaoInvestimentos/>
            </View>
        </View>
    );
};