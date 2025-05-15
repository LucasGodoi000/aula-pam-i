import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Exemplo06() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const mensErro = 'Valores inseridos de forma incorreta!';

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
    }

    function mensagemImc(valor) {
        if (isNaN(valor) || valor === 0) return '';
        if (valor < 18.5) return 'Abaixo do peso';
        if (valor >= 18.5 && valor <= 24.9) return 'Peso normal';
        if (valor >= 25 && valor <= 29.9) return 'Sobrepeso';
        if (valor >= 30 && valor <= 34.9) return 'Obesidade grau 1';
        if (valor >= 35 && valor <= 39.9) return 'Obesidade grau 2';
        if (valor >= 40) return 'Obesidade grau 3';
        return '';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Botao calcular={calculaImc}>Calcular</Botao>
            
            <Text style={styles.imc}>
                    {isNaN(imc) ? mensErro : `IMC: ${imc.toFixed(2)}`}
            </Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{mensagemImc(imc)}</Text>


        </View>
    )
}