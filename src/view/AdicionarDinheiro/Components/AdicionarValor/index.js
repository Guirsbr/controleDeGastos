import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './style';

export default function AdicionarValor(){

    const [valorParaAdicionar, setValorParaAdicionar]= useState(null)

    return(
        <View style={styles.boxAdicionarValor}>
            <TextInput style={styles.inputAdicionarValor}
                onChangeText={setValorParaAdicionar}
                value={valorParaAdicionar}
                placeholder='Inserir o valor aqui...'
                keyboardType='numeric'
            />
            <TouchableOpacity style={styles.buttonAdicionarValor}>
                <Text style={styles.textButtonAdicionarValor}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
};