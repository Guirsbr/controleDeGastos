import { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './style';

export default function Historico(){

    const [listaValoresRetirados, setListaValoresRetirados]= useState([
        {id: 1, dinheiroRetirado: 100},
        {id: 2, dinheiroRetirado: 200},
        {id: 3, dinheiroRetirado: 300},
        {id: 4, dinheiroRetirado: 400},
        {id: 5, dinheiroRetirado: 500},
        {id: 6, dinheiroRetirado: 600},
        {id: 7, dinheiroRetirado: 700},
        {id: 8, dinheiroRetirado: 800},
        {id: 9, dinheiroRetirado: 900},
        {id: 10, dinheiroRetirado: 1000},
        {id: 11, dinheiroRetirado: 1100},
    ])

    return(
        <View style={styles.boxHistorico}>
            <Text style={styles.textHistorico}>Histórico</Text>
            <FlatList
            style={styles.listaHistorico}
            data={listaValoresRetirados}
            renderItem={({item}) => {
                return(
                    <Text style={styles.textListaHistorico}>
                        <Text style={styles.textListaHistorico}>R$ -</Text>
                        {item.dinheiroRetirado}
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