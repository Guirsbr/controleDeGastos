import { View } from 'react-native';
import styles from './style';
import CarteiraSaldos from './CarteiraSaldos';
import ButtonAdicionarDinheiro from './Buttons/ButtonAdicionarDinheiro';
import ButtonSaidas from './Buttons/ButtonSaidas';
import ButtonRelatorios from './Buttons/ButtonsRelatorios';
import ButtonSugestaoInvestimentos from './Buttons/ButtonSugestaoInvestimentos';

export default function Functionalities(){
    return(
        <View style={styles.boxFunctionalities}>
            <CarteiraSaldos/>
            <View>
                <ButtonAdicionarDinheiro/>
                <ButtonSaidas/>
                <ButtonRelatorios/>
                <ButtonSugestaoInvestimentos/>
            </View>
        </View>
    );
};