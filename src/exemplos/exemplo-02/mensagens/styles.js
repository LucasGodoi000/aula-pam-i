import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import Mensagem from '.';

const styles = StyleSheet.create({
    container: {
        borderWidth: RFPercentage(0.5),
        padding: RFPercentage(1.5),
        borderColor: 'lightblue',
        borderRadius: RFPercentage(1.5),
        width: '90%',
        alignItems: 'center',
        marginBottom: RFPercentage(1),
    },
    titulo: {
        fontSize: RFPercentage (3.5),
        fontWeight: 'bold',
        color: 'blue',
    },
    mensagem: {
        fontSize: RFPercentage (2),
        color: '#222',
    },
})

export default styles