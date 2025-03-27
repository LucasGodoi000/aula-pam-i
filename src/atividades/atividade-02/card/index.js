import { View, Text } from 'react-native';
import styles from './styles';

// Componente Mensagem: Exibe um título e um texto dentro de um card
function Mensagem({ titulo, children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.mensagem}>{children}</Text>
        </View>
    );
}

// Componente Valor: Exibe o preço do produto de forma destacada
function Valor({ valor }) {
    return (
        <View style={styles.valor}>
            <Text style={styles.valorTexto}>{valor}</Text>
        </View>
    );
}

export { Mensagem, Valor }; // Agora ambos são exportados corretamente
