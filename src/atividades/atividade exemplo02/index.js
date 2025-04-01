import { View, Text } from 'react-native'; 

import styles from './styles';

import teclado1 from '../../../assets/teclado 1.png';
import teclado2 from '../../../assets/teclado 2.jpg';
import teclado3 from '../../../assets/teclado 3.png';

import Card from './card';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Loja de Teclados legais</Text>            

            <Card 
                titulo={'Teclado Mecânico SUNSET'} 
                descricao={'Teclado mecânico RGB alta qualidade'} 
                valor={'149,99'}
                img={teclado1}
            />
            <Card 
                titulo={'Teclado Mecânico Old Times'} 
                descricao={'Teclado estilo old times para fans retrô'} 
                valor={'99,99'}
                img={teclado2}
            />
            <Card 
                titulo={'Teclado Mecânico KG801'} 
                descricao={'KG801, O melhor do mercado pelo melhor preço'} 
                valor={'195,99'}
                img={teclado3}
            />
             <Card 
                //titulo={'Camiseta listrada clássica'} 
                //descricao={'Camisa de jogo de antigamente com listras, muito utilizada pela torcida'} 
                //valor={'350,00'}
                //img={camisaListrada}
            />

        </View>
    );
}

export default Atividade02;