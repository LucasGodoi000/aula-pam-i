import {useState} from 'react';

import { View, Text, Button, Alert, TouchableOpacity, } from 'react-native';

import styles from './styles';

function Exemplo03 () {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
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

                <View style={styles.botaoAlert}>
            <Button
            title='Alerta'
            color={'green'}
            onPress={handleExibeBotao2}
            />
                </View>

                <Text style={styles.valor}>{numero}</Text>

                <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                    <Text style={styles.txtBotao}>+1</Text>

                </TouchableOpacity>



        </View>
    );
}

export default Exemplo03;


// layout de uma tela