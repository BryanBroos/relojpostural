import { router } from 'expo-router';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { scheduleNotification } from '../utils/notificaciones';

import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SeleccionarScreen() {

  const [selectedPosition, setSelectedPosition] =
    useState<number | null>(null);

async function savePosition() {

  if (selectedPosition === null) return;

  await AsyncStorage.setItem(
    'initialPosition',
    selectedPosition.toString()
  );

  await AsyncStorage.setItem(
    'startTime',
    Date.now().toString()
  );

  await AsyncStorage.setItem(
    'hasSelectedPosition',
    'true'
  );

  await scheduleNotification();

  router.replace('/home');
}

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Selecciona la posición inicial
      </Text>

      {[1, 2, 3].map((position) => (

        <TouchableOpacity
          key={position}
          style={[
            styles.card,
            selectedPosition === position &&
            styles.selectedCard
          ]}
          onPress={() =>
            setSelectedPosition(position)
          }
        >

          <Text style={styles.cardText}>
            Posición {position}
          </Text>

        </TouchableOpacity>

      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={savePosition}
      >

        <Text style={styles.buttonText}>
          Continuar
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#D1FAE5',
  },

  title: {
  fontSize: 32,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 35,
  color: '#006847',
  marginTop: 40,
},

 card: {
  padding: 22,
  backgroundColor: '#FFFFFF',
  borderRadius: 25,
  marginBottom: 20,
  alignItems: 'center',

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 5,

  elevation: 4,
},

  selectedCard: {
  backgroundColor: '#96e0c7',
  transform: [{ scale: 1.03 }],
},

cardText: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#006847',
},
button: {
  marginTop: 30,
  backgroundColor: '#006847',
  padding: 18,
  borderRadius: 18,
  alignItems: 'center',
},

  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

});