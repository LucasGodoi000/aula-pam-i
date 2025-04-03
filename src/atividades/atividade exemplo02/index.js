import { View, Text } from 'react-native'; 

import styles from './styles';

import teclado1 from '../../../assets/teclado 1.png';
import teclado2 from '../../../assets/teclado 2.jpg';
import teclado3 from '../../../assets/teclado 3.png';
import teclado4 from '../../../assets/teclado 4.png';

import Card from './card';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Loja de Teclados legais</Text>            

            <Card 
                titulo={'Teclado Mecânico SUNSET'} 
                descricao={'Teclado mecânico RGB alta qualidade...'} 
                valor={'149,99'}
                img={teclado1}
            />
            <Card 
                titulo={'Teclado Mecânico   Old Times'} 
                descricao={'Teclado estilo old times para fans retrô...'} 
                valor={'99,99'}
                img={teclado2}
            />
            <Card 
                titulo={'Teclado Mecânico KG801'} 
                descricao={'KG801, O melhor do mercado...'} 
                valor={'195,99'}
                img={teclado3}
            />
             <Card 
                titulo={'Teclado Mecânico PINKLADY'} 
                descricao={'O teclado mais style que você vai ver hoje...'} 
                valor={'349,99'}
                img={teclado4}
            />

        </View>
    );
}

export default Atividade02;