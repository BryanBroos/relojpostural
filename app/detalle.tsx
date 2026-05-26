import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';

export default function DetalleScreen() {

  const { position } =
    useLocalSearchParams();

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Posición {position}
      </Text>

      <Text style={styles.text}>
        Aquí irá la información clínica,
        cuidados y recomendaciones
        de la posición.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D1FAE5',
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#006847',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
  },

  infoCard: {
  backgroundColor: '#FFF',
  borderRadius: 25,
  padding: 25,
},

});