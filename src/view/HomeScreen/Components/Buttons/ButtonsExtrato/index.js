import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';

export default function ButtonExtrato(){
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Extrato')}>
                <Image 
                source={ require('../../../../img/extrato.png')}
                style={styles.imageButton}/>
                <Text style={styles.textButton}>Extrato</Text>
            </TouchableOpacity>
        </View>
    );
};