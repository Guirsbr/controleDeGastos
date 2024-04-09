import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from '../style';

export default function ButtonSugestaoInvestimentos(){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Image 
                source={ require('../img/sugestaoInvestimentos.png')}
                style={styles.imageButton}/>
                <Text style={styles.textButton}>Investimentos</Text>
            </TouchableOpacity>
        </View>
    );
};
