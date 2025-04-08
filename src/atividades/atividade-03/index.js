import {useState} from 'react';

import { View, Text, Button, Alert, TouchableOpacity, } from 'react-native';

import styles from './styles';

function Atividade03 () {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
    }

    function handleDiscrementa() {
        setNumero(numero - 1);
    }

    function handleReset() {
        setNumero(0);
    }
    
    
    function handleExibeBotao () { // FAZER O APP NÃO APERTAR O BOTAO
        Alert.alert('Alerta', 'Alguem clicou no botaum!') 

    }

    const handleExibeBotao2 = () => {
        Alert.alert(
                    'Alerta', 
                    'Alguem clicou no botaum!',
            [
                {
                    text: 'clicou mesmo?',
                    onPress: () => Alert.alert('Mensagem ', 'sim'),
                    style: 'default',
                },

                {
                    text: 'certeza?',
                    onPress: () => Alert.alert('Mensagem ', 'certeza'),
                    style: 'default',
                },
                {
                    text: 'absoluta?',
                    onPress: () => Alert.alert('Mensagem ', 'absoluta'),
                    style: 'default',
                },

            ]

                    ) 
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variaveis e State</Text>


                <Text style={styles.valor}>{numero}</Text>


                <View style={styles.containerIncrementos}>


     

                <TouchableOpacity style={styles.botaoIncrementa} onPress={handleIncrementa}>
                    <Text style={styles.txtBotao}>+1</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoDiscrementa} onPress={handleDiscrementa}>
                    <Text style={styles.txtBotao}>-1</Text>

                </TouchableOpacity>



                </View>
                
                <TouchableOpacity style={styles.botaoReset} onPress={handleReset}>
                    <Text style={styles.txtBotao}>Zerar</Text>

                </TouchableOpacity>


        </View>
    );
}

export default Atividade03;


// layout de uma tela