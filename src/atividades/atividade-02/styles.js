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
        height: RFPercentage(15),
        width: RFPercentage(49),
        resizeMode: 'contain',
        borderRadius: RFPercentage(10),
        borderWidth: RFPercentage(0.2),

        backgroundColor: 'lightblue',
    },
    valor: {
        backgroundColor: 'lightblue', // Fundo azul claro para destacar
        padding: RFPercentage(1.5), // Espaçamento interno
        borderRadius: RFPercentage(1), // Bordas arredondadas
        borderWidth: RFPercentage(0.2), // Borda fina
        borderColor: 'black', // Cor da borda para contraste
        alignItems: 'center', // Estica para caber dentro do container
        justifyContent: 'flex-end', // Garantir que o valor esteja posicionado ao final
        marginTop: RFPercentage(0.14), // Espaço superior
        width: '1%', // Ajuste para que ocupe toda a largura disponível dentro do container
    },
    valorTexto: { // Estilo do texto do preço
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        color: 'yellow',
        textAlign: 'center',
    },
});

export default styles;
