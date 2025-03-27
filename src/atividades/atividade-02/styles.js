import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: { // Caixa branca que contém os produtos
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        width: '100%',
    },
    titulo: { // Estilo do título principal
        fontSize: RFPercentage(5),
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        color: 'blue',
        borderColor: 'blue',
        borderRadius: 20,
        padding: RFPercentage(1),
    },
    imagem: { // Configuração para as imagens dos teclados
        height: RFPercentage(19),
        width: RFPercentage(49),
        resizeMode: 'contain',
    },
    valor: { // Estilo do preço dentro do container
        backgroundColor: 'lightblue',
        padding: RFPercentage(1.5),
        borderRadius: RFPercentage(1),
        borderWidth: RFPercentage(0.2),
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFPercentage(1),
        width: '60%',
    },
    valorTexto: { // Estilo do texto do preço
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        color: 'darkblue',
        textAlign: 'center',
    },
});

export default styles;
