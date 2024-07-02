import { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './style';

export default function Historico(props){

    return(
        <View style={styles.boxHistorico}>
            <Text style={styles.textHistorico}>Histórico</Text>
            <FlatList
            style={styles.listaHistorico}
            data={props.listaValores}
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