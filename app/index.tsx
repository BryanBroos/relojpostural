import { useEffect } from 'react';

import { ActivityIndicator, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { router } from 'expo-router';

export default function IndexScreen() {

  useEffect(() => {

    checkAppState();

  }, []);

  async function checkAppState() {

    const hasSelectedPosition =
      await AsyncStorage.getItem(
        'hasSelectedPosition'
      );

    if (hasSelectedPosition === 'true') {

      router.replace('/home');

    } else {

      router.replace('/seleccionar');

    }
  }

  return (

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <ActivityIndicator size="large" />

    </View>

  );
}