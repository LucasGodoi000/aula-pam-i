

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';





    export default function Exemplo05() {

        const [n1, setN1] = useState(0);
        const [n2, setN2] = useState(0);
        const [total, setTotal] = useState(0);
        
    

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 5</Text>
            <Text style={styles.texto}>Calculadora básica</Text>

            <Text style={styles.textLabel}>1º número</Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}>2º número</Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput style={styles.txtEntrada} />

            <TouchableOpacity style={ styles.button}>
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>
        </View>
    );
    };





// layout de uma tela