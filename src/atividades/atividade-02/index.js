import { View, Text, Image,  } from 'react-native';

import styles from './styles';

import img1 from '../../../assets/teclado 1.png';

import img2 from '../../../assets/teclado 2.jpg';

import img3 from '../../../assets/teclado 3.png';

import Mensagem from './card';

function lojateclado () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Loja de teclado</Text>
            

            <Mensagem titulo={'teclado 1'} >
            <Image source={img1} style ={styles.imagem}/>
                teclado mecanico zika
            </Mensagem>
            <Mensagem titulo={'Erro'} >
            Erro desconhecido
            </Mensagem>
            <Mensagem titulo={'Alerta'} >
                ALERTAAAAA
            </Mensagem>

        </View>
    );
}

export default lojateclado;