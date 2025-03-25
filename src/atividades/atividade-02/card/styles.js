import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

import Mensagem from '../card';

const styles = StyleSheet.create({
    container: {
        borderWidth: RFPercentage(0.2),
        padding: RFPercentage(0.5),
        borderColor: 'blue',
        borderRadius: RFPercentage(0.25),
        width: '40%',
        
        alignItems: 'top',
        marginBottom: RFPercentage(1),
    },
    titulo: {
        fontSize: RFPercentage (2.5),
        fontWeight: 'bold',
        color: 'blue',
    },
    mensagem: {
        fontSize: RFPercentage (2),
        color: '#222',
    },
})

export default styles