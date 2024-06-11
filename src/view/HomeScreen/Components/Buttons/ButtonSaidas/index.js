import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from '../style';

export default function ButtonSaidas(){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Image 
                source={ require('../img/saidas.png')}
                style={styles.imageButton}/>
                <Text style={styles.textButton}>Saídas</Text>
            </TouchableOpacity>
        </View>
    );
};