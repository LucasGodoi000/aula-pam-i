import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';





// Exemplos
import Exemplo01 from './src/exemplos/exemplo-01';

import Exemplo02 from './src/exemplos/exemplo-02';

import Atividade02 from './src/atividades/atividade exemplo02';

import Exemplo03 from './src/exemplos/exemplo-03';

import Exemplo04 from './src/exemplos/exemplo-04';

import Exemplo05 from './src/exemplos/exemplo-05';

import Exemplo06 from './src/exemplos/exemplo-06';

import Exemplo07 from './src/exemplos/exemplo-07';


// Atividades
import Atividade01 from './src/atividades/atividade-01';

import Atividade03 from './src/atividades/atividade-03';

import Atividade04 from './src/atividades/atividade-04';


//import Atividade02 from './src/atividades/atividade-02';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo07/> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight || 8, 
  },
});
