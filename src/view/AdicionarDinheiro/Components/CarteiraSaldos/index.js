import { Text, View } from 'react-native';
import styles from './style';

export default function CarteiraSaldos(){
    return(
        <View style={styles.boxCarteiraSaldos}>
            <Text style={styles.textCarteiraSaldos}>Carteira: R$ 4369,70</Text>
        </View>
    );
};