import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from '../style';

export default function ButtonRelatorios(){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Image 
                source={ require('../img/relatorios.png')}
                style={styles.imageButton}/>
                <Text style={styles.textButton}>Extrato</Text>
            </TouchableOpacity>
        </View>
    );
};