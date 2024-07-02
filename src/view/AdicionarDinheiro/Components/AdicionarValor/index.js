import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './style';

import CarteiraSaldos from '../../../HomeScreen/Components/CarteiraSaldos';
import Historico from './Historico'
import '../../../../DTO/dtoCarteira'

export default function AdicionarValor(){

    const [valorParaAdicionar, setValorParaAdicionar]= useState(0)
    const [listaValoresAdicionados, setListaValoresAdicionados]= useState(listaValoresAdicionadosGlobal)

    function adicionarValorCarteira(){
        let valorSuporte = parseFloat(carteira) + parseFloat(valorParaAdicionar)
        setListaValoresAdicionados([{id: new Date().getTime(), dinheiroAdicionado: parseFloat(valorParaAdicionar)}, ...listaValoresAdicionados])
        listaValoresAdicionadosGlobal = [{id: new Date().getTime(), dinheiroAdicionado: parseFloat(valorParaAdicionar)}, ...listaValoresAdicionados]
        carteira = valorSuporte
        setValorParaAdicionar(0)
    }

    return(
        <View>
            <CarteiraSaldos valorCarteira={carteira}/>
            <View style={styles.boxAdicionarValor}>
                <TextInput style={styles.inputAdicionarValor}
                    onChangeText={setValorParaAdicionar}
                    value={valorParaAdicionar}
                    placeholder='Inserir o valor aqui...'
                    keyboardType='numeric'
                />
                <TouchableOpacity style={styles.buttonAdicionarValor} onPress={adicionarValorCarteira}>
                    <Text style={styles.textButtonAdicionarValor}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            <Historico listaValores={listaValoresAdicionados}/>
        </View>
    );
};