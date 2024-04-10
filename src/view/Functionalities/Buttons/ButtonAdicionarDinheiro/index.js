import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from '../style';

export default function ButtonAdicionarDinheiro(){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Image 
                source={ require('../img/adicionarDinheiro.png')}
                style={styles.imageButton}/>
                <Text style={styles.textButton}>Adicionar Dinheiro</Text>
            </TouchableOpacity>
        </View>
    );
};