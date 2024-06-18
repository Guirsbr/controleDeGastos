import { View, Text, Image } from 'react-native';

import styles from './style';

export default function Title(){
    return(
        <View>
            <View style={styles.boxTitle}>
                <Image 
                source={ require('../../../img/adicionarDinheiro.png')}
                style={styles.imageTitle}/>
                <Text style={styles.textTitle}>Adicionar Dinheiro</Text>
            </View>
        </View>
    );
};