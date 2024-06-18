import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default function VoltarMenu(){
    return(
        <TouchableOpacity style={styles.buttonVoltarMenu}>
            <Text style={styles.textVoltarMenu}>Voltar ao Menu</Text>
        </TouchableOpacity>
    );
};