import { Stack } from 'expo-router';


import { StatusBar } from 'expo-status-bar';


import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({

  handleNotification: async () => ({

    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,

  }),

});

export default function RootLayout() {


  return (

    <>
      <StatusBar style="dark" />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen name="index" />
        <Stack.Screen name="seleccionar" />
        <Stack.Screen name="home" />
        <Stack.Screen name="detalle" />

      </Stack>
    </>

  );
}