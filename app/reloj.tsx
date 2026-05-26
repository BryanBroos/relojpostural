import { StyleSheet, Text, View, Image } from 'react-native';

export default function RelojScreen() {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Reloj postural activo
      </Text>

      <Text style={styles.subtitle}>
        Las notificaciones se enviarán automáticamente
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
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },

});