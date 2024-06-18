import { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './style';

export default function Historico(){

    const [listaValoresAdicionados, setListaValoresAdicionados]= useState([
        {id: 1, dinheiroAdicionado: 100},
        {id: 2, dinheiroAdicionado: 200},
        {id: 3, dinheiroAdicionado: 300},
        {id: 4, dinheiroAdicionado: 400},
        {id: 5, dinheiroAdicionado: 500},
        {id: 6, dinheiroAdicionado: 600},
        {id: 7, dinheiroAdicionado: 700},
        {id: 8, dinheiroAdicionado: 800},
        {id: 9, dinheiroAdicionado: 900},
        {id: 10, dinheiroAdicionado: 1000},
        {id: 11, dinheiroAdicionado: 1100},
    ])

    return(
        <View style={styles.boxHistorico}>
            <Text style={styles.textHistorico}>Histórico</Text>
            <FlatList
            style={styles.listaHistorico}
            data={listaValoresAdicionados}
            renderItem={({item}) => {
                return(
                    <Text style={styles.textListaHistorico}>
                        <Text style={styles.textListaHistorico}>R$ +</Text>
                        {item.dinheiroAdicionado}
                    </Text>
                )
            }}
            keyExtractor={(item) => {
                item.id
            }}
            />
        </View>
    );
};