import * as Notifications from 'expo-notifications';

export function getNextPosition(position: number) {

  if (position === 1) return 2;

  if (position === 2) return 3;

  return 1;
}

export function calculateCurrentPosition(
  initialPosition: number,
  startTime: number
) {

  const now = Date.now();

  const secondsPassed =
    Math.floor((now - startTime) / 1000);

  // PARA PRUEBAS
  // cada 5 segundos cambia posición, en vez de cada 2 horas (7200 segundos)

  const cyclesPassed =
    Math.floor(secondsPassed / 7200);

  let currentPosition =
    initialPosition;

  for (let i = 0; i < cyclesPassed; i++) {

    currentPosition =
      getNextPosition(currentPosition);

  }

  return currentPosition;
}
export async function scheduleNotification() {

  await Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({

    content: {
      title: 'Cambio postural',
      body:
        'Es momento de cambiar la posición del paciente',
      sound: true,
    },

    trigger: {
      type:
        Notifications.SchedulableTriggerInputTypes
          .TIME_INTERVAL,

      // PRUEBAS
      seconds: 7200,

      repeats: true,
    },

  });
}