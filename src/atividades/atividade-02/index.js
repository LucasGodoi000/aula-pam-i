import { View, Text, Image } from 'react-native';
import styles from './styles';

import img1 from '../../../assets/teclado 1.png';
import img2 from '../../../assets/teclado 2.jpg';
import img3 from '../../../assets/teclado 3.png';

import { Mensagem, Valor } from './card'; // Agora importado corretamente

function LojaTeclado() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Loja de Teclados</Text>

            {/* Produto 1 */}
            <Mensagem titulo={'Teclado Mecânico SUNSET'}>
                <Image source={img1} style={styles.imagem} />
                <Valor valor={'R$ 99,29'} />
            </Mensagem>

            {/* Produto 2 */}
            <Mensagem titulo={'Teclado Mecânico Old Times'}>
                <Image source={img2} style={styles.imagem} />
                <Valor valor={'R$ 90,00'} />
            </Mensagem>

            {/* Produto 3 */}
            <Mensagem titulo={'Teclado Mecânico KG801'}>
                <Image source={img3} style={styles.imagem} />
                <Valor valor={'R$ 119,49'} />
            </Mensagem>
        </View>
    );
}

export default LojaTeclado;
