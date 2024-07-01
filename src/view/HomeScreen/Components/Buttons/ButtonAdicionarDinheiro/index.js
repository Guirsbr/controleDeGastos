import { TouchableOpacity, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';

export default function ButtonAdicionarDinheiro(){
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('AdicionarDinheiro')}>
                <Image 
                source={ require('../../../../img/adicionarDinheiro.png')}
                style={styles.imageButton}/>
                <Text style={styles.textButton}>Adicionar Dinheiro</Text>
            </TouchableOpacity>
        </View>
    );
};