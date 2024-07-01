import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function VoltarMenu(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.buttonVoltarMenu}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.textVoltarMenu}>Voltar ao Menu</Text>
        </TouchableOpacity>
    );
};