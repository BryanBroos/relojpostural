import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  calculateCurrentPosition,
} from '../utils/notificaciones';


export default function HomeScreen() {

  const [currentPosition, setCurrentPosition] =
    useState<number>(1);

useEffect(() => {

  loadPosition();

  const interval = setInterval(() => {
    loadPosition();
  }, 1000);

  return () => clearInterval(interval);
}, []);

function confirmReset() {

  Alert.alert(

    'Reiniciar aplicación',

    '¿Seguro que deseas reiniciar la aplicación?',

    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },

      {
        text: 'Sí, reiniciar',

        style: 'destructive',

        onPress: async () => {

          await AsyncStorage.clear();

          router.replace('/');

        },
      },
    ]
  );
}

async function loadPosition() {

  const initialPosition =
    await AsyncStorage.getItem('initialPosition');

  const startTime =
    await AsyncStorage.getItem('startTime');

  if (!initialPosition || !startTime) return;

  const current =
    calculateCurrentPosition(
      Number(initialPosition),
      Number(startTime)
    );

  setCurrentPosition(current);

}

  const positions = [

  {
    id: 1,
    image: require('../assets/images/izquierda.png'),
  },

  {
    id: 2,
    image: require('../assets/images/dorsal.png'),
  },

  {
    id: 3,
    image: require('../assets/images/derecha.png'),
  },

];

return (

  <>

    <StatusBar style="dark" />

    <SafeAreaView style={styles.safeArea}>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>
          Reloj Postural
        </Text>

        <Text style={styles.subtitle}>
          Posición actual del paciente
        </Text>

        {positions.map((position) => (

          <TouchableOpacity
            key={position.id}
            style={[
              styles.card,

              currentPosition === position.id &&
              styles.activeCard
            ]}
            onPress={() =>
              router.push({
                pathname: '/detalle',
                params: {
                  position: position.id.toString(),
                },
              })
            }
          >

            <Text
              style={[
                styles.cardText,

                currentPosition === position.id &&
                styles.activeCardText
              ]}
            >
              Posición {position.id}
            </Text>

            <Image
              source={position.image}
              style={styles.image}
            />

            {currentPosition === position.id && (

              <Text style={styles.activeText}>
                ACTUAL
              </Text>

            )}

          </TouchableOpacity>

        ))}

        <TouchableOpacity
          style={styles.resetButton}
          onPress={confirmReset}
        >

          <Text style={styles.resetText}>
            Reiniciar App
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>

  </>

);}


const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F3FDF7',
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#065F46',
    textAlign: 'center',
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 35,
  },

  card: {
    backgroundColor: '#D1FAE5',
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 18,
    alignItems: 'center',
  },

  activeCard: {
    backgroundColor: '#047857',
    transform: [{ scale: 1.03 }],
  },

  cardText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#065F46',
  },

  activeCardText: {
    color: '#FFFFFF',
  },

  activeText: {
    marginTop: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },

  image: {
    width: 135,
    height: 135,
    resizeMode: 'contain',
    marginTop: 12,
  },

  resetButton: {
    marginTop: 70,
    marginBottom: 20,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
  },

  resetText: {
    fontSize: 12,
    color: '#9CA3AF',
  },

});