<template>
  <div>
    <button @click="subscribeUser">Enable Push Notifications</button>
  </div>
</template>

<script>
export default {
  methods: {
    async subscribeUser() {
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        try {
          const registration = await navigator.serviceWorker.register('/service-worker.js');

          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: this.urlBase64ToUint8Array('BAQRJa5t3NsVh6-f7QNGoE726D23pRYQyjr7Z3VHi4zt919DHFjns6RaPe6RmkWdT2Goi4Mxbn3U4HowgAI5Awg')
          });

          console.log('User is subscribed:', JSON.stringify(subscription));

          // Add a logic that send information about the subscribe by user to server.js
          // 예: axios.post('/subscribe', subscription);
        } catch (error) {
          console.error('Failed to subscribe the user: ', error);
        }
      } else {
        console.warn('Push messaging is not supported');
      }
    },
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }
  }
}
</script>
