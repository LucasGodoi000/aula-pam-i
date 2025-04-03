import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';



const styles = StyleSheet.create({
    container: { // caixa branca a frente do background
        flex: 1, // container ocupa 100% da tela
        backgroundColor: 'whitesmoke',
        borderRadius: 3, // espessura da borda
        // padding: 8, // espaço interno
        width: '100%',
        height: 80,
        alignItems: 'center', // alinhamento horizontal
        textAlign:'center', //alinhamento horizontal do texto do container
        textAlignVertical:'center', // alinhamento vertical do texto
        color: 'white',
        fontWeight: 'bold',
    },
    titulo: {
        
        fontSize: RFPercentage(4), //tamanho da fonte (uso mobile)
        borderWidth: 3, // grossura da bordinha gostosa
        marginTop: 20, // espaço da parte de cima
        marginBottom: 20, // espaço da parte de baixo
        color: 'lightblue', // cor do texto
        borderColor: 'lightblue', // cor da borda
        borderRadius: 20, //arredondar borda
        padding: RFPercentage(1),

    },

    texto: {
        fontSize: RFPercentage(2.2),
    },

    botaoAlert: {
        color: 'white',
        width: '75%',
        margin: RFPercentage(3),
        

    },
});


export default styles;