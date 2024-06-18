import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style';
import Title from './Tittle'
import VoltarMenu from './VoltarMenu';

export default function Extrato(){
    return(
        <View style={styles.container}>
            <View style={styles.boxComponents}>
                <Title/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Mensal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Trimestral</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Anual</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Total</Text>
                </TouchableOpacity>
                <VoltarMenu/>
            </View>
        </View>
    );
};