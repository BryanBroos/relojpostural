import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { useLocalSearchParams } from 'expo-router';

export default function DetalleScreen() {

  const { position } =
    useLocalSearchParams();

  const positionsInfo: any = {

    1: {

      title: 'Decúbito Lateral Izquierdo',

      image: require(
        '../assets/images/izquierda.png'
      ),

      description:
        'No olvides colocar las almohadas de protección:',

      recommendations: [
        'Debajo de la cabeza abarcando el cuello.',
        'Debajo del brazo que queda arriba.',
        'Entre las rodillas.',
      ],
    },

    2: {

      title: 'Boca Arriba (Dorsal)',

      image: require(
        '../assets/images/dorsal.png'
      ),

      description:
        'No olvides colocar las almohadas de protección: ',

      recommendations: [
        'Debajo de la cabeza abarcando cuello.',
        'Una pequeña parte superior de la espalda.',
        'Debajo de los codos',
        'Debajo de las rodillas',
        'Debajo de los talones',
      ],
    },

    3: {

      title: 'Decúbito Lateral Derecho',

      image: require(
        '../assets/images/derecha.png'
      ),

      description:
        'No olvides colocar las almohadas de protección: ',

      recommendations: [
        'Debajo de la cabeza abarcando el cuello.',
        'Debajo del brazo que queda arriba.',
        'Entre las rodillas',
      ],
    },
  };

  const currentPosition =
    positionsInfo[position as string];

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        {currentPosition.title}
      </Text>

      <Image
        source={currentPosition.image}
        style={styles.image}
      />

      <View style={styles.infoCard}>

        <Text style={styles.description}>
          {currentPosition.description}
        </Text>

        <Text style={styles.subtitle}>
          Recomendaciones
        </Text>

        {currentPosition.recommendations.map(
          (item: string, index: number) => (

            <Text
              key={index}
              style={styles.recommendation}
            >
              • {item}
            </Text>

          )
        )}


      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#D1FAE5',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006847',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },

  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 25,
  },

  infoCard: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 25,
  },

  description: {
    fontSize: 18,
    color: '#111827',
    lineHeight: 30,
    marginBottom: 25,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#006847',
    marginBottom: 15,
  },

  recommendation: {
    fontSize: 17,
    color: '#374151',
    marginBottom: 12,
  },

  adContainer: {
  marginTop: 30,
  alignItems: 'center',
  marginBottom: 20,
},
});