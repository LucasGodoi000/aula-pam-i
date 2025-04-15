import { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity,  } from 'react-native';

import styles from './styles';

function Atividade04 () {

    const [txtDigitado, setTxtDigitado] = useState('');

    const [txtDigitado2, setTxtDigitado2] = useState('');

    const [valorVisualizar, setValorVisualizar] = useState('');

    const [valorVisualizar2, setValorVisualizar2] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 04</Text>

            <Text style={styles.texto}> {valorVisualizar}  {valorVisualizar2}</Text>

            <Text style={styles.nome}>nome</Text>

            <TextInput 
            style={styles.txtInput} 
            value={txtDigitado}
            onChangeText={(nomeInput) => setTxtDigitado(nomeInput)} 
            />
         <Text style={styles.nome}>sobrenome</Text>
            <TextInput 
            style={styles.txtInput} 
            value={txtDigitado2}
            onChangeText={(sobrenomeInput) => setTxtDigitado2(sobrenomeInput)} 
            />

             
            <TouchableOpacity 
            style={styles.botao}
            onPress={() => {
                setValorVisualizar(txtDigitado);
                setValorVisualizar2(txtDigitado2);
                setTxtDigitado('');
                setTxtDigitado2('');
              }}
            >
                <Text style={styles.txtBotao}>Visualizar nome</Text>
            </TouchableOpacity>




        </View>
    );
}

export default Atividade04;


// layout de uma tela