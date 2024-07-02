import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './style';

import CarteiraSaldos from '../../../HomeScreen/Components/CarteiraSaldos';
import Historico from './Historico';
import '../../../../DTO/dtoCarteira'

export default function AdicionarSaida(){

    const [valorParaRetirar, setValorParaRetirar]= useState(0)
    const [listaValoresRetirados, setListaValoresRetirados]= useState(listaValoresRetiradosGlobal)

    function removerValorCarteira(){
        let valorSuporte = parseFloat(carteira) - parseFloat(valorParaRetirar)
        setListaValoresRetirados([{id: new Date().getTime(), dinheiroRetirado: parseFloat(valorParaRetirar)}, ...listaValoresRetirados])
        listaValoresRetiradosGlobal = [{id: new Date().getTime(), dinheiroRetirado: parseFloat(valorParaRetirar)}, ...listaValoresRetirados]
        carteira = valorSuporte
        setValorParaRetirar(0)
    }

    return(
        <View>
            <CarteiraSaldos valorCarteira={carteira}/>
            <View style={styles.boxAdicionarSaida}>
                <TextInput style={styles.inputAdicionarSaida}
                    onChangeText={setValorParaRetirar}
                    value={valorParaRetirar}
                    placeholder='Inserir o valor aqui...'
                    keyboardType='numeric'
                />
                <TouchableOpacity style={styles.buttonAdicionarSaida} onPress={removerValorCarteira}>
                    <Text style={styles.textButtonAdicionarSaida}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            <Historico listaValores={listaValoresRetirados}/>
        </View>
    );
};