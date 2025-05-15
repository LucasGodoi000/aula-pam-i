import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eee',
        padding: RFValue(12),
        alignItems: 'center',
        borderRadius: RFValue(20),
        justifyContent: 'space-between',
    },
    titulo: {
        margin: RFValue(6),
        fontSize: RFValue(28),
        fontWeight: 'bold',
        color: '#aaa',
    },
    ladoalado: {
        flexDirection: 'row',
        marginVertical: RFValue(30),
    },
    imc: {
        color: 'gray',
        fontSize: RFValue(45),
        marginVertical: RFValue(15),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    txtMensagem: {
        fontSize: RFValue(34),
        marginBottom: RFValue(50),
        fontWeight: 'bold',
        color: 'black',
    }
});

export default styles;