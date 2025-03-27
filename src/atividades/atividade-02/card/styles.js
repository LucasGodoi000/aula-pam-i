import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 3,
        borderWidth: RFPercentage(0.3),
        padding: RFPercentage(2),
        borderColor: 'blue',
        borderRadius: RFPercentage(0.53),
        width: '79%',
        alignItems: 'center',
        marginBottom: RFPercentage(0.20),
    },
    titulo: {
        fontSize: RFPercentage(2.25),
        fontWeight: 'bold',
        color: 'blue',
    },
    mensagem: {
        fontSize: RFPercentage(1.69),
        color: 'whiteblue',
    },
    valor: {
        backgroundColor: 'lightblue', // Fundo azul claro para destacar
        padding: RFPercentage(1.5), // Espaçamento interno
        borderRadius: RFPercentage(1), // Bordas arredondadas
        borderWidth: RFPercentage(0.2), // Borda fina
        borderColor: 'white', // Cor da borda para contraste
        alignItems: 'stretch', // Centraliza o conteúdo
        justifyContent: 'flex-end',
        marginTop: RFPercentage(0.12), // Espaço superior
        width: '60%', // Define a largura
    },
    valorTexto: {
        fontSize: RFPercentage(2.5), // Tamanho maior da fonte
        fontWeight: 'bold', // Deixa o texto mais visível
        color: 'darkblue', // Azul escuro para contraste
        textAlign: 'center',
    },
});

export default styles;
