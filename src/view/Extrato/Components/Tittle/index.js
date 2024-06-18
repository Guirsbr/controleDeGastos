import { View, Text, Image } from 'react-native';

import styles from './style';

export default function Title(){
    return(
        <View>
            <View style={styles.boxTitle}>
                <Image 
                source={ require('../../../img/extrato.png')}
                style={styles.imageTitle}/>
                <Text style={styles.textTitle}>Extrato</Text>
            </View>
        </View>
    );
};