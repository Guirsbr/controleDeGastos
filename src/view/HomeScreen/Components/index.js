import { useState, useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './style';

import Title from './Title'
import CarteiraSaldos from './CarteiraSaldos';
import ButtonAdicionarDinheiro from './Buttons/ButtonAdicionarDinheiro';
import ButtonSaidas from './Buttons/ButtonSaidas';
import ButtonExtrato from './Buttons/ButtonsExtrato';
import ButtonSugestaoInvestimentos from './Buttons/ButtonSugestaoInvestimentos';
import '../../../DTO/dtoCarteira'

export default function HomeScreen({ navigation }){

    const [valorCarteira, setValorCarteira]= useState(carteira)

    useFocusEffect(
        useCallback(() => {
            setValorCarteira(carteira);
        }, [])
    );

    return(
        <View style={styles.container}>
            <Title/>
            <View style={styles.boxComponents}>
                <CarteiraSaldos valorCarteira={valorCarteira}/>
                <ButtonAdicionarDinheiro/>
                <ButtonSaidas/>
                <ButtonExtrato/>
                <ButtonSugestaoInvestimentos/>
            </View>
        </View>
    );
};