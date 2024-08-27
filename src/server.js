import webpush from 'web-push'

const vapidKeys = {
    publicKey: 'BAQRJa5t3NsVh6-f7QNGoE726D23pRYQyjr7Z3VHi4zt919DHFjns6RaPe6RmkWdT2Goi4Mxbn3U4HowgAI5Awg',
    privateKey: 'zZir_UdDHfY5P4ztqA6K_LHd6yX2OSNNCqhTh10L25k'
};

webpush.setVapidDetails(
    'mailto:chamchisae@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const pushSubscription = {
    endpoint: 'CLIENT_ENDPOINT_URL',
    keys: {
        auth: 'CLIENT_AUTH_KEY',
        p256dh: 'CLIENT_P256DH_KEY'
    }
};

const payload = JSON.stringify({
    title: 'WEBPUSH TESTING!',
    body: 'TEST SUCCESS',
});

webpush.sendNotification(pushSubscription, payload).catch(error => {
    console.error('Error sending notification:', error);
});
