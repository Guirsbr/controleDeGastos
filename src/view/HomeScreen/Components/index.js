import { View } from 'react-native';

import styles from './style';
import Title from './Title'
import CarteiraSaldos from './CarteiraSaldos';
import ButtonAdicionarDinheiro from './Buttons/ButtonAdicionarDinheiro';
import ButtonSaidas from './Buttons/ButtonSaidas';
import ButtonRelatorios from './Buttons/ButtonsRelatorios';
import ButtonSugestaoInvestimentos from './Buttons/ButtonSugestaoInvestimentos';

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Title/>
            <View style={styles.boxComponents}>
                <CarteiraSaldos/>
                
                    <ButtonAdicionarDinheiro/>
                    <ButtonSaidas/>
                    <ButtonRelatorios/>
                    <ButtonSugestaoInvestimentos/>
                
            </View>
        </View>
    );
};