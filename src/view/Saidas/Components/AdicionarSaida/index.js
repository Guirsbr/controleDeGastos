import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default function AdicionarSaida(){

    const [valorParaRetirar, setValorParaRetirar]= useState(null)

    return(
        <View style={styles.boxAdicionarSaida}>
            <TextInput style={styles.inputAdicionarSaida}
                onChangeText={setValorParaRetirar}
                value={valorParaRetirar}
                placeholder='Inserir o valor aqui...'
                keyboardType='numeric'
            />
            <TouchableOpacity style={styles.buttonAdicionarSaida}>
                <Text style={styles.textButtonAdicionarSaida}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
};