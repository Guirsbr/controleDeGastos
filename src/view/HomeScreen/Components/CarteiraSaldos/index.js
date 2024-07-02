import { Text, View } from 'react-native';
import styles from './style'; 

export default function CarteiraSaldos(props){

    return(
        <View style={styles.boxCarteiraSaldos}>
            <Text style={styles.textCarteiraSaldos}>Carteira: R$ {props.valorCarteira}</Text>
        </View>
    );
};