import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from '../style';

export default function ButtonExtrato(){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Image 
                source={ require('../../../../img/extrato.png')}
                style={styles.imageButton}/>
                <Text style={styles.textButton}>Extrato</Text>
            </TouchableOpacity>
        </View>
    );
};