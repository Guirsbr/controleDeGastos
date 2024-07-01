import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';

export default function ButtonSaidas(){
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Saidas')}>
                <Image 
                source={ require('../../../../img/saidas.png')}
                style={styles.imageButton}/>
                <Text style={styles.textButton}>Saídas</Text>
            </TouchableOpacity>
        </View>
    );
};